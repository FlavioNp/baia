const Booking = require('../models/Booking');


module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { baia_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            baia: baia_id,
            date,
        });

        await booking.populate('baia').populate('user').execPopulate();

        return res.json(booking);
   }
};