const express = require('express');
const eventsApiRouter = express.Router();
const eventsController = require('../controllers/eventsController');

//Ruta /events
eventsApiRouter.get('/events', eventsController.getEvents)

//Rutas /details
eventsApiRouter.get('/events/:name', eventsController.getDetails)

//Ruta /search
eventsApiRouter.get('/search', eventsController.getSearch)

//Rutas /favoritos
eventsApiRouter.get('/favorites', eventsController.getFavorites);
eventsApiRouter.post('/favorites', eventsController.getFavorites);
eventsApiRouter.delete('/favorites', eventsController.getFavorites);


module.exports = eventsApiRouter;


