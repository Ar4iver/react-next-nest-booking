'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Cottages, {
        foreignKey: 'cottageId',
        as: 'cottage',
      });
    }
  }

  Booking.init(
    {
      cottageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cottages',
          key: 'id',
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Booking',
    },
  );

  return Booking;
};
