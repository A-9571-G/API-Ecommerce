"use strict"

const { Model, DataTypes, Sequelize }= require('sequelize');
const { CONSUMERS_TABLE }= require('./consumers.model');

const ORDERS_TABLE = 'orders';

module.exports = {
  // TABLE
  ORDERS_TABLE,
  // SCHAME
  Orderscheme : {
    id:{
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : DataTypes.INTEGER
    },
    consumerId: {
      field: 'consumer_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      References: {
        model: CONSUMERS_TABLE,
        key: 'id',
      },
      onUpdate : 'CASCADA',
      onDelete : 'SET NULL'
    },
    Pay : {
      allowNull     : false,
      type          : DataTypes.STRING,
      defaultValue  : '0000-0000-0000-0000'
    },
    location: {
      allowNull     : true,
      type          : DataTypes.STRING
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
  Orders: class Orders extends Model{
    static associate(models){
      this.belongsTo(models.Consumers, { as: 'Consumers' });
      this.belongsToMany(models.Product, {
        as         :  'items',
        through    :  models.OrdersProduct,
        foreignKey :  'orderId',
        otherKey   :  'productId'
      } );
    }
    static config(sequelize){
      return {
        sequelize,
        tableName  : ORDERS_TABLE,
        modelName  : 'Orders',
        TimeRanges : false
      }
    }
  }
}
