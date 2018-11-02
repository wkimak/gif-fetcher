const axios = require('axios');
const { knex } = require('../database/index.js');
const { apiKey } = require('../../config.js');

exports.fetchGifs = async (req, res) => { 
  try {
    if(req.query.offset) {
      var fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.query.searchTerm}&limit=6&offset=${req.query.offset}`);
    } else if(req.query.weirdLevel) {
        fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${req.query.searchTerm}&weirdness=${req.query.weirdLevel}`);
    }
    res.send(fetchGifs.data);
  } catch {
    console.log('ERROR fetching gifs from gif API');
  }
}

