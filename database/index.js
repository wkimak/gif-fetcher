const { dbPassword } = require('../config.js');
const mysql = require('mysql');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : dbPassword,
    database : 'gif_fetcher'
  }
});

module.exports = { knex };