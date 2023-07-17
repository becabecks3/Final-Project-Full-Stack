const express = require('express');
const eventsApiRouter = express.Router();
const eventsController = require('../controllers/eventsController');

eventsApiRouter.get('/user', eventsController.getUser);

//Rutas /favoritos
eventsApiRouter.get('/favorites', eventsController.getFavorites);
eventsApiRouter.post('/favorites', eventsController.postFavorites);
eventsApiRouter.delete('/favorites', eventsController.deleteFavorites);


module.exports = eventsApiRouter;


