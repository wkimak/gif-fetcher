const express = require('express');
const axios = require('axios');
const { apiKey } = require('../config.js');
const app = express();

 app.get('/api/gifs', (req, res) => {
   
   axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.query.searchTerm}`)
  .then((response) => {
     res.send(response.data);
  })
  .catch((err) => {
    console.log('ERROR fetching gifs', err);
  })
})


app.use(express.static('./client/dist'));

app.listen('3000', () => {
  console.log('Server is listening on port 3000');
})