const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    aproved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    baia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Baia'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);