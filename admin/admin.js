"use strict"

const {sequelize} = require('./data/libs/dataset');
const {Pool} = require('./data/libs/dataset');

// STRUCTURE
module.exports = {
  Pool,
  sequelize,
  midelware: require('./data/middleware/midelware'),
  Handler: require('./data/middleware/validatorSchemas'),
  dataUser : require('./data/schemas/user.schema'),
  dataConsumer : require('./data/schemas/consumers.schema'),
  dataCategory : require('./data/schemas/category.schema'),
  dataProduct : require('./data/schemas/product.schema'),
  dataOrders : require('./data/schemas/orders.schema'),
}
