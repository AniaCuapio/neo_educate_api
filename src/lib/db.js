const mongoose = require("mongoose");

//Nos permite acceder a una variable de entorno el .env
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

module.exports = () => {
  //retorna una promesa 
  return mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
