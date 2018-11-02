const { database } = require('../../config.js');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : database.mysqlEndpoint,
    user : database.rdsUser,
    port: database.rdsPort,
    password : database.rdsPassword,
    database : database.rdsName
  }
});

module.exports = { knex };
