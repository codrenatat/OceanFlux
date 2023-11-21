const Hotel = require('../models/hotelModel');
const Viaje = require('../models/viajeModel');

async function obtenerHoteles(req, res) {
    try {
        const hoteles = await Hotel.find();
        res.status(200).json(hoteles);
    } catch (error) {
        console.error('Error al obtener hoteles:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function agregarHotelAMisViajes(req, res) {
    try {
        const { usuarioId, hotelId, numNoches, numPersonas } = req.body;

        const hotel = await Hotel.findById(hotelId);

        if (!hotel) {
            throw new HotelException('Hotel no encontrado');
        }

        const nuevoViaje = new Viaje({
            usuarioId: usuarioId,
            hotel: hotel,
            numNoches: numNoches,
            numPersonas: numPersonas,
            total: calcularTotal(numNoches, hotel.precioxnoche),
        });

        const viajeGuardado = await nuevoViaje.save();

        res.status(201).json(viajeGuardado);
    } catch (error) {
        console.error('Error al agregar hotel a mis viajes:', error);
        res.status(400).send(error.errorMessage || 'Error al procesar la solicitud');
    }
}

function calcularTotal(numNoches, precioPorNoche) {
    return numNoches * precioPorNoche;
}

module.exports = {
    obtenerHoteles,
    agregarHotelAMisViajes,
};

