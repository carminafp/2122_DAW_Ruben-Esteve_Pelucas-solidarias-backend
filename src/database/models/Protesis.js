'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Protesis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Protesis.belongsTo(models.Solicitudes,{foreignKey:"solicitudId"})
    }
  }
  Protesis.init({
    forma: DataTypes.STRING,
    color: DataTypes.STRING,
    longitud: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Protesis',
    tableName:'protesis'
  });
  return Protesis;
};