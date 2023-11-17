const mongoose = require("mongoose");

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

mongoose.connect(mongoConnection, {useNewUrlParser: true, useUnifiedTopology: true});


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

