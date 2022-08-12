"use strict"

const { dbconfig } = require('../admin/data/config/config');

const USER = encodeURIComponent(dbconfig.DB_USER);
const PASSWORD = encodeURIComponent(dbconfig.DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${dbconfig.DB_HOST}:${dbconfig.DB_PORT}/${dbconfig.DB_NAME}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}
