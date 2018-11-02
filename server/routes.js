const express = require('express');
const router = express.Router();

const fetchGifsControllers = require('./controllers/fetchGifsControllers.js');
const loginControllers = require('./controllers/loginControllers.js');
const favoritesControllers = require('./controllers/favoritesControllers.js');

router.get('/api/gifs', fetchGifsControllers.fetchGifs);
router.post('/api/users', loginControllers.handleLogin);
router.post('/api/favorites', favoritesControllers.postFavorites);
router.get('/api/favorites', favoritesControllers.fetchFavorites);
router.delete('/api/favorites', favoritesControllers.deleteFavorites);

module.exports = router;