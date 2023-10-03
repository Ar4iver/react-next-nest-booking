const fs = require('fs');
const path = require('path');

const mockData = require('../src/mocks/cottage.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Cottages',
      mockData.map((item) => ({
        ...item,
      })),
    );
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cottages', null, {});
  },
};
