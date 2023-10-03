'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cottages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      images: DataTypes.STRING,
      amenities: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Cottages',
    },
  );
  return Cottages;
};
