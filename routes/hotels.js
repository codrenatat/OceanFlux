const {Router} = require('express');
const router = Router();

const hotelModel = require('../models/hotelModel');

router.get("/hotels", async(req, res) => {
    try{
        const mihotels = await hotelModel.find();
        res.status(200).json(mihotels);
    }catch(error){
        res.status(500).send("Cannot get mihotel");
    }
});

router.post('/hotels', async(req,res) => {
    try{
        let newHotel = new hotelModel ({
            nombreHotel: req.body.nombreHotel,
            playa: req.body.playa,
            precioxnoche: req.body.precioxnoche,
            convenio: req.body.convenio,
        })
        let hotelSave = await newHotel.save();
        res.status(201).json(hotelSave);
    }catch(error){
        res.status(400).send(error)
    }
});

module.exports = router;
