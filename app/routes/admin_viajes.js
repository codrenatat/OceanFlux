const express = require('express');
const router = express.Router();
const fs = require('fs');
const dataHandler = require('../controllers/data_handler');

router.post('/', (req, res) => {
    console.log("Solicitud de creación de viaje recibida");
    let viajeData = req.body;
    if (!viajeData.userId || !viajeData.hotelId || !viajeData.noches || !viajeData.numPersonas) {
        res.status(400);
        res.send("Faltan atributos requeridos en la solicitud");
    } else {
        // Agregar lógica para validar el ID del usuario y del hotel si es necesario

        let nuevoViaje = {
            userId: viajeData.userId,
            hotelId: viajeData.hotelId,
            noches: viajeData.noches,
            numPersonas: viajeData.numPersonas,
        };

        // Puedes calcular el total aquí si es necesario

        dataHandler.agregarViaje(nuevoViaje);
        res.status(201);
        res.send("Viaje creado correctamente");
    }
});

router.put('/:id', (req, res) => {
    console.log("Solicitud de actualización de viaje recibida");
    let viajeId = req.params.id;
    let updatedViajeData = req.body;

    if (!updatedViajeData.noches || !updatedViajeData.numPersonas) {
        res.status(400);
        res.send("Faltan atributos requeridos en la solicitud");
    } else {
        let viaje = dataHandler.getViajeById(viajeId);

        if (!viaje) {
            res.status(404);
            res.send("Viaje no encontrado");
        } else {
            viaje.noches = updatedViajeData.noches;
            viaje.numPersonas = updatedViajeData.numPersonas;

            // Puedes recalcular el total aquí si es necesario

            dataHandler.actualizarViaje(viajeId, viaje);
            res.status(200);
            res.send("Viaje actualizado correctamente");
        }
    }
});

router.delete('/:id', (req, res) => {
    console.log("Solicitud de eliminar un viaje recibida");
    let viajeId = req.params.id;
    let deletedViaje = dataHandler.getViajeById(viajeId);

    if (!deletedViaje) {
        res.status(404);
        res.send("Viaje no encontrado");
    } else {
        dataHandler.eliminarViaje(viajeId);
        res.status(200);
        res.send("Viaje eliminado correctamente");
    }
});

module.exports = router;
