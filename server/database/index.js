require('dotenv').config();

const knex = require('knex')({
  client: 'mysql',
  connection: process.env.JAWSDB_URL
});


module.exports = { knex };

