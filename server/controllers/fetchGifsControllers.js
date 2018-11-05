const axios = require('axios');
const { knex } = require('../database/index.js');
const { apiKey } = require('../../config.js');

// the url changes depending on search type selected on client
exports.fetchGifs = async (req, res) => { 
  const searchType = req.query.searchType;
  try {
    if(searchType === 'search') {
        var fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.query.searchTerm}&limit=6&offset=${req.query.offset}`);
    } else if(searchType === 'trending') {
        fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=6&offset=${req.query.offset}`);
    } else if(searchType === 'politics') {
        fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=politics&limit=6&offset=${req.query.offset}`);
    } else if(searchType === 'entertainment') {
        fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=entertainment&limit=6&offset=${req.query.offset}`);
    } else if(searchType === 'sports') {
        fetchGifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=sports&limit=6&offset=${req.query.offset}`);
    }
   
    res.send(fetchGifs.data);
  } catch {
    console.log('ERROR fetching gifs from gif API');
  }
}

exports.fetchWeirdGifs = async (req, res) => {
  try {
    const fetchWeirdGif = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${req.query.searchTerm}&weirdness=${req.query.weirdLevel}`);
    res.send(fetchWeirdGif.data);
  } catch {
    console.log('ERROR fetching weird gif from API');
  }
}
