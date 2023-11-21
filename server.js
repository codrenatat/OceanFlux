const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Mongo
const mongoConnection = 'mongodb+srv://admin:oceanflux@project.l7yrx7s.mongodb.net/';
mongoose.connect(mongoConnection);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/hoteles", require("./app/routes/hotels"));
app.use(require("./app/routes/viajes"));
app.use(require("./app/routes/users"));

// Init
app.listen(port, () => {
  console.log("Server running in port: 3000");
});
