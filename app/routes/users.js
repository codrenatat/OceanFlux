const {Router} = require('express');
const router = Router();

const usersModel = require('../models/userModel');

router.get("/users", async(req, res) => {
    try{
        const misUsers = await usersModel.find();
        res.status(200).json(misUsers);
    }catch(error){
        res.status(500).send("Cannot get users");
    }
});

router.post("/users", async(req, res) => {
    try{
        let newUser = new usersModel({
            nombre: req.body.nombre,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            edad: req.body.edad,
            genero: req.body.genero,      
        });
        let usersSave = await newUser.save();
        res.status(201).json(usersSave);
    }catch(error){
        res.status(400).send(error)
    }
});

module.exports = router;
/*const {Router} = require('express');
const router = Router();

const usersModel = require('../models/userModel');

/*router.get("/hotels", async (req, res) => {
  try {
    const mihotels = await hotelModel.find();
    res.status(200).json(mihotels);
  } catch (error) {
    res.status(500).send("Cannot get mihotel");
  }
});

router.post("/hotels", async (req, res) => {
  try {
    let newHotel = new hotelModel({
      nombreHotel: req.body.nombreHotel,
      playa: req.body.playa,
      precioxnoche: req.body.precioxnoche,
      convenio: req.body.convenio,
    });
    let hotelSave = await newHotel.save();
    res.status(201).json(hotelSave);
  } catch (error) {
    res.status(400).send(error);
  }
});*/ 

router.get("/users", async(req, res) => {
    try{
        const misUsers = await usersModel.find();
        res.status(200).json(misUsers);
    }catch(error){
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
      let userSave = await newUser.save();
      res.status(201).json(userSave);
    } catch (error) {
      res.status(400).send(error);
    }
});
/*
router.post("/login", async (req, res) => {
    try {
        const usuario = req.body.usuario;
        const contrasenia = req.body.contrasenia;

        // Verificar las credenciales en la base de datos
        const user = await usersModel.findOne({ usuario, contrasenia });

        if (!user) {
            // Usuario no encontrado o credenciales incorrectas
            res.status(401).json({ message: "Credenciales incorrectas" });
            return;
        }

        // Usuario autenticado
        res.status(200).json({ message: "Inicio de sesión exitoso", user });
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post("/users", async(req, res) => {
    try{
        let newUser = new usersModel({
            nombre: req.body.nombre,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            edad: req.body.edad,
            genero: req.body.genero,      
        });
        let usersSave = await newUser.save();
        res.status(201).json(usersSave);
    }catch(error){
        res.status(400).send(error)
    }
});

router.post("/register", async (req, res) => {
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
*/
/*
module.exports = router;*/
