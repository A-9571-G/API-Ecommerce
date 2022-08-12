'use strict';

const { Categoryscheme, CATEGORY_TABLE } = require('./../models/data/category.model');
const { Productscheme, PRODUCT_TABLE } = require('./../models/data/product.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE, Categoryscheme);
    await queryInterface.createTable(PRODUCT_TABLE, Productscheme);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
