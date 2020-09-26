const Baia = require('../models/Baia');

const { store } = require("./SessionController");

module.exports = {
    async store(req, res) {
       const { filename } = req.file;
       const { company, price, city, set} = req.body;

        return res.json({ ok: true });
    }
};