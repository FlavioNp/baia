const mongoose = require('mongoose');

const BaiaSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    city: String,
    set: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Baia', BaiaSchema);