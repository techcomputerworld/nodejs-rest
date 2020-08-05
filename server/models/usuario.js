const mongoose = require('mongoose');
//const Usuario = require() 
//obtener esquema 
let Schema = mongoose.Schema;

let usuarioSchema = new Schema();

//definir reglas y controles 
let usuarioSchema = new Schema({
    //creación de propiedades dentro del esquema de nuestra base de datos
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    google: {
        type: Boolean,
        default: false
    }
});

//necesitamos exportar ese modelo 
module.exports = mongoose.model(' Usuario', usuarioSchema);