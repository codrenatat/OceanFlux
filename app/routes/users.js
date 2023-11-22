const {Router} = require('express');
const router = Router();


const usersModel = require('../models/userModel');

//GETS
router.get("/users", async(req, res) => {
    try{
        const misUsers = await usersModel.find();
        res.status(200).json(misUsers);
    }catch(error){
        res.status(500).send("Cannot get users");
    }
});

router.get('/users/:nombre/:contrasenia?', async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const contrasenia = req.params.contrasenia;

        const usuario = await usersModel.findOne({ nombre: nombre });

        if (!usuario) {
            return res.status(404).json({ mensaje: "No se encontró el usuario." });
        } else {
            if (contrasenia) {
                // Si hay una contraseña en los parámetros, verificarla
                if (usuario.compararContrasenia(contrasenia)) {
                    res.status(200).json(usuario);
                } else {
                    res.status(500).send("La contraseña no es correcta.");
                }
            } else {
                // Si no hay contraseña en los parámetros, devolver solo la información del usuario
                res.status(200).json(usuario);
            }
        }
    } catch (error) {
        res.status(500).send("Error" + error.message);
    }
});


//POSTS
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

