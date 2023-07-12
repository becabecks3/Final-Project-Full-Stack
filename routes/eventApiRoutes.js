const express = require('express');
const eventsApiRouter = express.Router();
const eventsController = require('../controllers/eventsController');

eventsApiRouter.get('/user', eventsController.getUser);

//Rutas /favoritos
eventsApiRouter.get('/favorites', eventsController.getFavorites);
eventsApiRouter.post('/favorites', eventsController.getFavorites);
eventsApiRouter.delete('/favorites', eventsController.getFavorites);


module.exports = eventsApiRouter;


