"use strict"

require('dotenv').config();

//MODEL
module.exports={
  dbconfig: {
    env: process.env.NODE_ENV||'dev',
    PORT: process.env.PORT||3000,
    DB_USER: process.env.BD_USER,
    DB_PASSWORD: process.env.BD_PASSWORD ,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT
  }
}
