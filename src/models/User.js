const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    whatsapp: String,
});

module.exports = mongoose.model('User', UserSchema );