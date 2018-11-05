const axios = require('axios');
const { knex } = require('../database/index.js');
const { apiKey } = require('../../config.js');

// the url changes depending on search type selected on client
exports.fetchGifs = async (req, res) => { 
  const searchType = req.query.searchType,
  searchTerm = req.query.searchTerm,
  limit = req.query.limit,
  offset = req.query.offset;
  try {
    if(searchType === 'trending') {
      var fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`);
    } else {
      fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}`);
    }
    res.send(fetchGifs.data);
  } catch {
    res.sendStatus(500);
    console.log('ERROR fetching gifs from gif API');
  }
}

exports.fetchWeirdGifs = async (req, res) => {
  try {
    const fetchWeirdGif = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${req.query.searchTerm}&weirdness=${req.query.weirdLevel}`);
    res.send(fetchWeirdGif.data);
  } catch {
    res.sendStatus(500);
    console.log('ERROR fetching weird gif from API');
  }
}
