const { getCottageImages } = require('../src/utils/imageService.ts');
('use strict');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cottageNames = ['WhiteHouse', 'BrownHouse', 'BordoHouse'];
    const data = await Promise.all(
      cottageNames.map(async (name, index) => {
        return {
          price: (index + 1) * 100,
          name: `${name.split(/(?=[A-Z])/).join(' ')} House`,
          description: 'Some description',
          images: await getCottageImages(name),
          amenities: JSON.stringify([
            'Wi-Fi',
            'Кондиционер',
            'Телевизор',
            'Кухня',
          ]),
          maxGuests: 7,
          numberOfBedrooms: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    );

    return queryInterface.bulkInsert('Cottages', data);
  },

  async down(queryInterface, Sequelize) {},
};
