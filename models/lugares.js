const mongoose = require('mongoose');

//definir campos de modelo

const lugarSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    }
}, {versionkey:false});

module.exports = mongoose.model('lugares', lugarSchema);