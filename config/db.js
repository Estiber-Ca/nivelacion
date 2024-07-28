const mongoose = require('mongoose');
require('dotenv').config();

//Conexion base

const conectar = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Conectado con mongo'))
    .catch((err) => console.log(err))
}

module.exports = conectar;