require('dotenv').config();

const knex = require('knex')({
  client: 'mysql',
  connection: process.env.JAWSDB_URL
});

knex.raw('select 1+1 as result').then(function (data) {
  // there is a valid connection in the pool
  console.log('DATA', data)
})
.catch((err) => {
  console.log(err);
})

module.exports = { knex };

