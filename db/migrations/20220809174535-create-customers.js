'use strict';

const { Consumerscheme, CONSUMERS_TABLE } = require('./../models/data/consumers.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CONSUMERS_TABLE, Consumerscheme);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CONSUMERS_TABLE);
  }
};
