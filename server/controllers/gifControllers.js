const axios = require('axios');
const { knex } = require('../database/index.js');
const { apiKey } = require('../../config.js');

exports.fetchGifs = async (req, res) => { 
  console.log(req.query.offset);
  try {
    const fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.query.searchTerm}&limit=6&offset=${req.query.offset}`);
    res.send(fetchGifs.data);
  } catch {
    console.log('ERROR fetching gifs from gif API');
  }
}