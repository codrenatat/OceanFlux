const express = require("express");
const path = require("path");

const userRouter = require("../routes/userRouter");
const hotelRouter = require("../routes/hotelRouter");
const viajeRouter = require("../routes/viajeRouter");

const router = express.Router();

// Middleware para validar si es admin
function validateAdmin(req, res, next) {
  // Aquí puedes implementar tu lógica de validación de administrador
  // Por ahora, simplemente verificaré si el token es "admin"
  if (req.get("x-token") == "admin") {
    next();
  } else {
    res.status(403).send("Solo admins");
  }
}

// Rutas para diferentes partes de la aplicación
