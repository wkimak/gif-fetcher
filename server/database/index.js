const { database } = require('../../config.js');
console.log(database.mysqlEndpoint)

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 's54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'kycoslt1dbsc9dyb',
    password: ' o86xs5dheasyy6os',
    port: 3306,
    database: 'aja1irdaehd1rwng'
  }
});

module.exports = { knex };


