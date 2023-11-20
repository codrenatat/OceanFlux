const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Mongoose Connection
let mongoConnection = "mongodb+srv://admin:oceanflux@project.l7yrx7s.mongodb.net/";
mongoose.connect(mongoConnection, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Conectando...');
  console.log(mongoose.connection.readyState);
});

db.on('connected', () => {
  console.log("¡Conexión Exitosa!");
  console.log(mongoose.connection.readyState);
});

db.on('error', (err) => {
  console.error('ERROR!!', err);
});

// User Schema
const userSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  contrasenia: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    min: 0,
    max: 120,
    required: true
  },
  genero: {
    type: String,
    enum: ['F', 'M'],
    required: true
  },
  viajes: [
    {
      hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
      noches: { type: Number, required: true },
      numPersonas: { type: Number, required: true },
      total: { type: Number } // Puedes calcular esto al guardar o al leer según tus necesidades
    }
  ]
});

// Hotel Schema
const hotelSchema = mongoose.Schema({
  nombreHotel: {
    type: String,
    required: true
  },
  playa: {
    type: String,
    required: true
  },
  precioxnoche: {
    type: Number,
    required: true
  },
  convenio: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
const Hotel = mongoose.model('Hotel', hotelSchema);

// Ruta para que el usuario agregue viajes
app.post('/api/users/:userId/viajes', async (req, res) => {
  try {
    const { userId } = req.params;
    const { hotelId, noches, numPersonas } = req.body;

    // Aquí debes hacer la lógica para calcular el total según tus necesidades
    // Por ahora, simplemente multiplicamos el número de noches por el precio por noche
    const hotel = await Hotel.findById(hotelId);
    const total = noches * hotel.precioxnoche;

    // Agregar el viaje al usuario
    const user = await User.findById(userId);
    user.viajes.push({ hotel: hotelId, noches, numPersonas, total });
    await user.save();

    res.status(201).json({ message: 'Viaje agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar el viaje:', error);
    res.status(400).json({ error: 'ERROR' });
  }
});

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
