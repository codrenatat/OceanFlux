const { Router } = require("express");
const router = Router();

const usersModel = require("../models/userModel");

router.get("/users", async (req, res) => {
  try {
    const misUsers = await usersModel.find();
    res.status(200).json(misUsers);
  } catch (error) {
    res.status(500).send("Cannot get users");
  }
});

router.post("/users", async (req, res) => {
  try {
    let newUser = new usersModel({
      nombre: req.body.nombre,
      correo: req.body.correo,
      contrasenia: req.body.contrasenia,
      edad: req.body.edad,
      genero: req.body.genero,
    });
    let usersSave = await newUser.save();
    res.status(201).json(usersSave);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
