const Lugar = require('../models/lugares');

// Agregar lugar
exports.agregarLugar = async (req, res) => {
    try {
        let lugar = new Lugar(req.body);
        await lugar.save();
        res.json(lugar);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar lugar');
    }
};

// Mostrar todos los lugares
exports.mostrarLugares = async (req, res) => {
    try {
        const lugares = await Lugar.find();
        res.json(lugares);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al mostrar lugares');
    }
};

// Mostrar un lugar por ID
exports.mostrarLugar = async (req, res) => {
    try {
        let lugar = await Lugar.findById(req.params.id); // Usar req.params.id en lugar de req.params.Id
        if (!lugar) {
            return res.status(404).json({ msg: 'No se encuentra lugar' });
        }
        return res.json(lugar); // Asegúrate de usar return para evitar que continúe la ejecución
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error al buscar lugar'); // Usar return para evitar ejecución adicional
    }
};

// Actualizar lugar
exports.actualizarLugar = async (req, res) => {
    try {
        const lugar = await Lugar.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        if (!lugar) {
            return res.status(404).send('Error al consultar lugar');
        }
        return res.json(lugar); // Asegúrate de usar return para evitar que continúe la ejecución
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error al actualizar lugar'); // Usar return para evitar ejecución adicional
    }
};

//Eliminar

exports.eliminarLugar = async (req, res) => {
    try {
        const lugar = await Lugar.findByIdAndDelete(req.params.id);
        if (!lugar) {
            return res.status(404).json({ msg: 'No se encuentra lugar' });
        }
        return res.json({ msg: 'Lugar eliminado con éxito' });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error al eliminar lugar');
    }
};