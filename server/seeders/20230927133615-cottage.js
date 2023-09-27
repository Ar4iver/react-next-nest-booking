const faker = require('@faker-js/faker');
const axios = require('axios');
('use strict');

const QUERY = 'cottage';
const PER_PAGE = 30;

const amenitiesList = [
  'Wi-Fi',
  'Бассейн',
  'Кондиционер',
  'Телевизор',
  'Парковка',
  'Спа-центр',
  'Фитнес-центр',
  'Завтрак включен',
  'Кухня',
  'Джакузи',
];

function getRandomAmenities() {
  const shuffled = amenitiesList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

async function fetchUnsplashImages() {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: QUERY,
        per_page: PER_PAGE,
        client_id: 'w4QLIDIEbJvM53A6qFI4UL4zvZ3APx7tUiZpJE2VFgU',
      },
    });

    return response.data.results.map((image) => image.urls.full);
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
    return [];
  }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const unsplashImages = await fetchUnsplashImages();

    return queryInterface.bulkInsert('Cottage', [
      ...Array(50).map(() => ({
        price: faker.commerce.price({ min: 2500, max: 20000 }),
        name: faker.lorem.sentence(2),
        description: faker.lorem.paragraph(10),
        images: JSON.stringify(
          [...Array(5)].map(() => {
            const randomIndex = Math.floor(
              Math.random() * unsplashImages.length,
            );
            return unsplashImages[randomIndex];
          }),
        ),
        amenities: JSON.stringify(getRandomAmenities()),
        maxGuests: faker.number.int({ min: 1, max: 7 }),
        numberOfBedrooms: faker.number.int({ min: 1, max: 3 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cottage', null, {});
  },
};
