"use strict"

const {Client} = require('pg');

module.exports = {
  getconection: async ()=>{
    const client = new Client({
      host:'localhost',
      port:5432,
      user:'max',
      password:'admin123',
      database:'my_store'
    });
    await client.connect();
    return client;
  }
};
