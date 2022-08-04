"use strict"

const {sequelize} = require('./data/libs/dataset');
const {Pool} = require('./data/libs/dataset');

// STRUCTURE
module.exports = {
  Pool,
  sequelize,
  midelware: require('./data/middleware/midelware'),
  valide: require('./data/middleware/validatorSchemas'),
  scheme: require('./data/schemas/schema')
}
