const express = require('express');
const eventsApiRouter = express.Router();
const eventsApiController = require('../controllers/eventsApiController');


//Rutas /favoritos
eventsApiRouter.get('/favorites', eventsApiController.getFavorites);
eventsApiRouter.post('/favorites', eventsApiController.getFavorites);
eventsApiRouter.delete('/favorites', eventsApiController.getFavorites);

//Ruta /search
eventsApiRouter.get('/search', eventsApiController.seacrhAll)


