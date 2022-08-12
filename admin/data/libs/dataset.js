"use strict"

const {Pool} = require('pg');
const {Sequelize} = require('sequelize');

const{dbconfig} = require('../config/config');
const{setupModel} = require('../../../db/models/model');

const PASSWORD = encodeURIComponent(dbconfig.DB_PASSWORD);
const USER = encodeURIComponent(dbconfig.DB_USER);
const URL = `postgres://${USER}:${PASSWORD}@${dbconfig.DB_HOST}:${dbconfig.DB_PORT}/${dbconfig.DB_NAME}`

const sequelize = new Sequelize(URL,{
  dialect:'postgres',
  loggin:true
});

setupModel(sequelize);

module.exports = {
  // pool
  Pool: new Pool({connectionString: URL}),
  // sequelize
  sequelize
};
