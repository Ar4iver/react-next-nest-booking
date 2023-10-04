'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cottages extends Model {
    static associate(models) {
      Cottages.hasMany(models.Images, {
        foreignKey: 'cottageId',
        as: 'images',
      });
    }
  }
  Cottages.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      numberOfBedrooms: DataTypes.INTEGER,
      maxGuests: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cottages',
    },
  );
  return Cottages;
};
