'use strict';

const { Orderscheme, ORDERS_TABLE } = require('./../models/data/orders.model');
const { OrdersProductcheme, ORDERS_PRODUCT_TABLE } = require('./../models/data/orderProduct.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDERS_TABLE,Orderscheme);
    await queryInterface.createTable(ORDERS_PRODUCT_TABLE,OrdersProductcheme);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDERS_TABLE);
    await queryInterface.dropTable(ORDERS_PRODUCT_TABLE);
  }
};
