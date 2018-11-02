const { knex } = require('../database/index.js');

exports.handleLogin = async (req, res) => {

  try {
    const checkExists = await knex.select('id_user').from('users').where('username', req.body.username)

    if(!checkExists.length) {
      try {
        const insertUser = await knex('users').insert({ username: req.body.username, password: req.body.password })
        const fetchUser = await knex.select('id_user').from('users').where('username', req.body.username);
        res.send(JSON.stringify(fetchUser[0].id_user));
      } catch {
        console.log('ERROR inserting/fetching user');
      }
    } else {
      res.send(JSON.stringify(checkExists[0].id_user));
    }
  } catch {
    console.log('ERROR checking if user exists in users table');
  }
}