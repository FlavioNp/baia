const Baia = require('../models/Baia');
    
module.exports = {
    async show(req, res){
        const { user_id } = req.headers;
        
        const baias = await Baia.find( { user: user_id });

        return res.json(baias);
    }
}