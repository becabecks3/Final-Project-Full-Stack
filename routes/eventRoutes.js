const express = require('express');
const eventsRouter = express.Router();
const eventsController = require('../controllers/eventsController')

// eventsRouter.get('/', eventsController.getHome);


module.exports = eventsRouter;