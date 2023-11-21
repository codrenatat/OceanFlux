const mongoose = require("mongoose");
<<<<<<< HEAD

//const mongoConnection = "mongodb+srv://admin:oceanflux@project.l7yrx7s.mongodb.net/";
const mongoConnection = "mongodb+srv://admin:oceanflux@project.l7yrx7s.mongodb.net/";
=======
>>>>>>> 2e33fdb756ef89cbaf9894135995319183d5038c

const mongoConnection =
  "mongodb+srv://admin:oceanflux@project.l7yrx7s.mongodb.net/";

let database = mongoose.connection;

database.on("connecting", () => {
  console.log("Connecting...");
  console.log(mongoose.connection.readyState);
});

database.on("connected", () => {
  console.log("Succesful Connection");
  console.log(mongoose.connection.readyState);
});

database.on("error", (err) => {
  console.error("ERROR!!", err);
});

mongoose.connect(mongoConnection);
