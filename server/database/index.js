const { database } = require('../../config.js');
console.log(database.mysqlEndpoint)

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


  // mysqlEndpoint: process.env.RDS_ENDPOINT,
  // rdsUser: process.env.RDS_USER,
  // rdsPort: process.env.RDS_PORT,
  // rdsPassword: process.env.RDS_PASSWORD,
  // rdsName: process.env.RDS_NAME
