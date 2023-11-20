const express = require('express');

require("./database");

const cors = require('cors');
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
//app.use(require("./routes/intro"));

//Init
app.listen(3000, () => {
  console.log('Server running in port: 3000');
});

//Imprimiendo un hello world para ver si funciona. 
app.get('/', (req,res) => {
  res.send('hello world');
});

module.exports = app;
/*
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

/*MONGOOSE*/
/*
let mongoConnection = "mongodb+srv://admin:oceanflux@project.l7yrx7s.mongodb.net/";
let db = mongoose.connection;

db.on('connecting', () => {
    console.log('Conectando...');
    console.log(mongoose.connection.readyState);
});

db.on('connected', () => {
    console.log("¡Conexión Exitosa!");
    console.log(mongoose.connection.readyState);
});

database.on('error', (err) => {
    console.error('ERROR!!', err);
});

mongoose.connect(mongoConnection, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

/*SCHEMA*/
/*
let userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type:String,
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
      }
});

let hotelSchema = mongoose.Schema({
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

  const users = mongoose.model('users', userSchema);
  const hotels = mongoose.model('hotels', hotelSchema);
  */
/*


const user = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
    try {
        const userData = req.body;
        const newUser = new user(userData);
        await newUser.save();
        res.status(201).json(newUser);
        newUser.save().then((doc) => console.log(("User created: ") + doc));
    } catch (error) {
        res.status(400).json({ error: 'ERROR' });
    }
});

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});
*/

/*import express from "express"
import cors from "cors"

import reviews from "./api/reviews.route.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews", reviews);
app.use("*", (req,res) => 
    res.status(404) .json({error: "not found"}));


export default app
*/

