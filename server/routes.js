const express = require('express');
const router = express.Router();

const gifControllers = require('./controllers/gifControllers.js');
const authControllers = require('./controllers/authControllers.js');

router.get('/api/gif', gifControllers.fetchGifs);
router.post('/api/user', authControllers.handleSignup);

module.exports = router;