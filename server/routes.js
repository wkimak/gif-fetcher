const express = require('express');
const router = express.Router();

const fetchGifsControllers = require('./controllers/fetchGifsControllers.js');
const loginControllers = require('./controllers/loginControllers.js');
const favoritesControllers = require('./controllers/favoritesControllers.js');

router.post('/api/users', loginControllers.handleLogin);
router.get('/api/gifs', fetchGifsControllers.fetchGifs);
router.get('/api/favorites', favoritesControllers.fetchFavorites);
router.post('/api/favorites', favoritesControllers.postFavorites);
router.delete('/api/favorites', favoritesControllers.deleteFavorites);

module.exports = router;