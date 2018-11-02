const { database } = require('../../config.js');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'giffetcherinstance.cv4ydzzllfqa.us-east-2.rds.amazonaws.com',
    user : 'wkimak',
    port: 5431,
    password : '',
    database : 'gifFetcher'
  }
});

module.exports = { knex };


