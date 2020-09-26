const User = require('../models/User');
const Baia = require('../models/Baia');


module.exports = {
    async index(req, res) {
        const { city } = req.query;

        const baias = await Baia.find( {city: city});

        return res.json(baias);
    },

    async store(req, res) {
       const { filename } = req.file;
       const { company, price, city, set} = req.body;
       const { user_id } = req.headers;

       const user = await User.findById(user_id);

       if (!user) {
           return res.status(400).json({error: 'User does not exist'})
       }
       const baia = await Spot.create({
           user: user_id,
           thumbnail: filename,
           company,
           price,
           city,
           set: set.split(',').map( tech => tech.trim()),
       })

        return res.json({ ok: true });
    }
};