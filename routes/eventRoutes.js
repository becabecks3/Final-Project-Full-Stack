const express = require('express');
const eventsRouter = express.Router();
const eventsController = require('../controllers/eventsController')

eventsRouter.get('/', eventsController.getHome);
eventsRouter.get('/signup', eventsController.signUp);
eventsRouter.get('/login', eventsController.login);
eventsRouter.get('/favorites', eventsController.favorites);
eventsRouter.get('/profile', eventsController.profile);

module.exports = eventsRouter;