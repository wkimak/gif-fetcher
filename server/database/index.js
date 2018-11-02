const { database } = require('../../config.js');
console.log(database.mysqlEndpoint)

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'giuz7rbdus19wida',
    password: ' nhz9xzta67xzqj0m',
    port: 3306,
    database: 'o4sf9s7p7kweylux'
  }
});

module.exports = { knex };




