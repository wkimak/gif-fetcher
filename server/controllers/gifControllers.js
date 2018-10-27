const axios = require('axios');
const { apiKey } = require('../../config.js')

exports.fetchGifs = (req, res) => { 
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.query.searchTerm}`)
  .then((response) => {
     res.send(response.data);
  })
  .catch((err) => {
    console.log('ERROR fetching gifs', err);
  })
}