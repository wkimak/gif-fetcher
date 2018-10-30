const express = require('express');
const router = express.Router();

const gifControllers = require('./controllers/gifControllers.js');
const authControllers = require('./controllers/authControllers.js');
const favoritesControllers = require('./controllers/favoritesControllers.js');

router.get('/api/gifs', gifControllers.fetchGifs);
router.post('/api/users', authControllers.handleSignup);
router.post('/api/favorites', favoritesControllers.postFavorites);
router.get('/api/favorites', favoritesControllers.fetchFavorites);

module.exports = router;