/*const mongoose = require("mongoose");
const { connected } = require("process");
const mongoConnection = "mongodb+srv://renatatejeda:<password>@cluster0.hiusly6.mongodb.net/test";

 let database = mongoose.connection;

 database.on('connecting', () => {
    console.log("Connecting...");
    console.log(mongoose.connection.readyState);
});

database.on('connected', () => {
    console.log("Succesful Connection")
    console.log(mongoose.connection.readyState);
});

database.on('error', (err) => {
    console.error('ERROR!!', err);
});

mongoose.connect(mongoConnection);*/