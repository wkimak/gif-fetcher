const { knex } = require('../../database/index.js');

exports.handleSignup = (req, res) => {
  knex('users').insert({username: req.body.username, password: req.body.password})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}