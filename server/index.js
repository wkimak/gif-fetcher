const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes.js');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', routes);


app.listen(process.env.PORT || '3000', () => {
  console.log('Server is listening on port 8080');
})