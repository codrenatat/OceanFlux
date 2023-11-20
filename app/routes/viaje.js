const express = require('express');
const router = express.Router();
const fs = require('fs');
const dataHandler = require('../controllers/data_handler');

router.get('/', (req, res) => {
    console.log("Viajes funcionando!");
    let params = req.query;
    let result;

    if (Object.keys(params).length === 0) {
        fs.readFile('./app/data/viajes.json', 'utf-8', (err, data) => {
            if (err) {
                console.log("err" + err);
            } else {
                console.log("Working!");
                console.table(JSON.parse(data));
                result = data;
                res.send(result);
            }
        });
    } else {
        let query;
        if (params.userId === undefined)
            params.userId = "";
        if (params.hotelId === undefined)
            params.hotelId = "";

        query = params.userId;
        query += ":";
        query += params.hotelId;
        result = dataHandler.findViaje(query);

        if (result.length === 0) {
            res.status(404);
            res.send("Viaje not found");
        } else {
            console.table(result);
            res.send(result);
        }
    }
});

router.get("/:id", (req, res) => {
    let viajeId = req.params.id;
    let viaje = dataHandler.getViajeById(viajeId);
    if (viaje) {
        console.log("Obtener viaje por ID");
        res.json(viaje);
    } else {
        res.status(404);
        res.send("Viaje no encontrado");
    }
});

router.post('/cart', (req, res) => {
    console.log('CARRITO');
    const viajeIds = req.body.viajes;

    if (!Array.isArray(viajeIds) || viajeIds.length === 0) {
        res.sendStatus(400);
        return;
    }

    const cartViajes = [];
    let notFound = false;

    viajeIds.forEach((viaje) => {
        const query = `:${viaje.userId}:${viaje.hotelId}`;
        const foundViajes = dataHandler.findViaje(query);

        if (foundViajes.length === 0) {
            notFound = true;
            return;
        }

        cartViajes.push(viaje);
    });

    if (notFound) {
        console.log('Viaje no encontrado');
        res.status(404).send('Error');
    } else {
        console.log('Viajes agregados correctamente');
        res.status(200).json(cartViajes);
    }
});

module.exports = router;
