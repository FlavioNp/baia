const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const BaiaController = require('./controllers/BaiaController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/baias', upload.single('thumbnail'), BaiaController.store);

module.exports = routes;