"use strict"

const { Model, DataTypes, Sequelize }= require('sequelize');
const {CATEGORY_TABLE} = require('./category.model');

const PRODUCT_TABLE = 'product';

module.exports = {
  // TABLE
  PRODUCT_TABLE,
  // SCHAME
  Productscheme : {
    id:{
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER
    },
    categoryId : {
      field         : 'category_id',
      allowNull     : true,
      type          : DataTypes.INTEGER,
      references    : {
        model  : CATEGORY_TABLE,
        key    : 'id'
      },
      onUpdate      : 'CASCADE',
      onDelete      : 'SET NULL'
    },
    name : {
      allowNull     : false,
      type          : DataTypes.STRING,
    },
    img : {
      allowNull     : false,
      type          : DataTypes.STRING,
      defaultValue  : "Customer"
    },
    description : {
      allowNull     : false,
      type          : DataTypes.STRING
    },
    stock : {
      allowNull     : false,
      type          : DataTypes.INTEGER,
    },
    price : {
      allowNull     : false,
      type          : DataTypes.INTEGER,
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
  Product: class Product extends Model{
    static associate(models){
    this.belongsTo(models.Category,{as : "category" });
    }
    static config(sequelize){
      return {
        sequelize,
        tableName  : PRODUCT_TABLE,
        modelName  : 'Product',
        TimeRanges : false
      }
    }
  }
}
