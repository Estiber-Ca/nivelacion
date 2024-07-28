const express = require('express');
const conectar = require('../config/db');
const cors = require('cors');


//Servidor
const app = express();

const port = process.env.PORT || 5000;

//Enlazar conexion
conectar();
app.use(cors());
app.use(express.json());

//rutas

app.use('/api/lugares', require('../routes/rutas'));


//Verificar ruta
app.get('/', (req, res) =>{
    res.send('Hola desde la web')

});

app.listen(port,()=>{
    console.log('Servidor conectado')
});