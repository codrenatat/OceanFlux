const {Router} = require('express');
const router = Router();

const Hotels = require("../models/hotelModel");

router.get("/hotels", async(req, res) => {
    try{
        const mihotels = await Hotels.find();
        res.status(200).json(mihotels);
    }catch(error){
        res.status(500).send("Cannot get mihotel");
    }
});

router.post('/hotels', async(req,res) => {

});

module.exports = router;
