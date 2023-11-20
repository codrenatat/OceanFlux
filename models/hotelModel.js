const {Schema, model} = require('mongoose');

const hotelSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  servicios: {
    type: [String],
    required: true
  },
  habitaciones: {
    individuales: {
      type: Number,
      required: true
    },
    dobles: {
      type: Number,
      required: true
    },
    suites: {
      type: Number,
      required: true
    }
  },
  contacto: {
    telefono: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    }
  }
});

module.exports = model('Hotels', hotelSchema);