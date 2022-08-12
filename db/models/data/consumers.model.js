"use strict"

const { Model, DataTypes, Sequelize }= require('sequelize');
const { USER_TABLE }= require('./user.model');

const CONSUMERS_TABLE = 'consumers';

module.exports = {
  // TABLE
  CONSUMERS_TABLE,

  // SCHAME
  Consumerscheme : {
    id:{
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER
    },
    userId: {
      field         : 'user_id',
      allowNull     : false,
      type          : DataTypes.INTEGER,
      unique        : true,
      references    : {
        model : USER_TABLE,
        key    : 'id'

      },
      onUpdate      : 'CASCADE',
      onDelete      : 'SET NULL'
    },
    name : {
      allowNull     : false,
      type          : DataTypes.STRING
    },
    Subname : {
      allowNull     : false,
      type          : DataTypes.STRING
    },
    img: {
      allowNull     : true,
      type          : DataTypes.STRING
    }
  },
  // CLASS
  Consumers: class Consumers extends Model{
    static associate(models){
      this.belongsTo(models.User, {as: 'user'});
    }
    static config(sequelize){
      return {
        sequelize,
        tableName  : CONSUMERS_TABLE,
        modelName  : 'Consumers',
        timestamps: false
      }
    }
  }
}
