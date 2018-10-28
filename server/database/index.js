const { dbPassword } = require('../../config.js');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'Jkpywb98',
    database : 'gif_fetcher'
  }
});

module.exports = { knex };