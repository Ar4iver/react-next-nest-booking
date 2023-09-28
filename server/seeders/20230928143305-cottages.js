'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Cottages',
      [...Array(100)].map(() => ({
        price: 100,
        name: 'Ivan',
        description: 'Some description',
        images: JSON.stringify(
          [...Array(5)].map(() => `https://someUrlImage.ru`),
        ),
        amenities: JSON.stringify(
          [...Array(5)].map((index) => `some amenities ${index}`),
        ),
        maxGuests: 5,
        numberOfBedrooms: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
