'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.Cottages, {
        foreignKey: 'cottageId',
        as: 'cottage',
      });
    }
  }
  Images.init(
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cottageId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cottages',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Images',
    },
  );
  return Images;
};
