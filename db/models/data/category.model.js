"use strict"

const { Model, DataTypes, Sequelize }= require('sequelize');

const CATEGORY_TABLE = 'category';

module.exports = {
  // TABLE
  CATEGORY_TABLE,
  // SCHAME
  Categoryscheme : {
    id:{
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER
    },
    name: {
      allowNull     : false ,
      type          : DataTypes.STRING,
      unique        : true
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
  Category: class Category extends Model{
    static associate(models){
      this.hasMany(models.Product,{
        as: 'products',
        foreignKey: 'categoryId'

      });
    }
    static config(sequelize){
      return {
        sequelize,
        tableName  : CATEGORY_TABLE,
        modelName  : 'Category',
        TimeRanges : false
      }
    }
  }
}
