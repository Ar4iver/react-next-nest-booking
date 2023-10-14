'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate(models) {
      // define association here
      Reviews.belongsTo(models.Cottages, {
        foreignKey: 'cottageId',
        onDelete: 'CASCADE',
      });
    }
  }

  Reviews.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cottageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cottages',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Reviews',
      tableName: 'reviews',
    },
  );

  return Reviews;
};
