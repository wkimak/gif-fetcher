const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes.js');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./client/dist'));
app.use('/', routes);


app.listen('3000', () => {
  console.log('Server is listening on port 3000');
})