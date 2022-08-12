"use strict"

const { Model, DataTypes, Sequelize }= require('sequelize');

const USER_TABLE = 'users';

module.exports = {
  // TABLE
  USER_TABLE,
  // SCHAME
  Userscheme : {
    id:{
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER
    },
    email : {
      allowNull     : false,
      type          : DataTypes.STRING,
      unique        : true
    },
    password : {
      allowNull     : false ,
      type          : DataTypes.STRING
    },
    role : {
      allowNull     : false,
      type          : DataTypes.STRING,
      defaultValue  : "Customer"
    },
    createdAt : {
      allowNull     : false ,
      type          : DataTypes.DATE,
      field         : 'create_at',
      defaultValue  : Sequelize.NOW
    },
    updatedAt : {
      allowNull     : true ,
      type          : DataTypes.DATE,
      field         : 'update_at',
      defaultValue  : Sequelize.NOW
    }
  },
  // CLASS
  User: class User extends Model{
    static associate(models){
      this.hasOne(models.Consumers,{
        as: 'consumer',
        foreignKey: 'userId'

      });
    }
    static config(sequelize){
      return {
        sequelize,
        tableName  : USER_TABLE,
        modelName  : 'User',
        TimeRanges : false
      }
    }
  }
}

