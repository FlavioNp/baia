const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const BaiaController = require('./controllers/BaiaController');
const ProfileController = require('./controllers/ProfileController')
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/baias', BaiaController.index);
routes.post('/baias', upload.single('thumbnail'), BaiaController.store);

routes.get('/profile ', ProfileController.show);

routes.post('/baias/:baia_id/bookings', BookingController.store);

module.exports = routes;