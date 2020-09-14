var mongoose = require('mongoose');

const anunciosSchema = new mongoose.Schema({
  
    categoria: {
        type: String,
    },
    company_name: {
        type: String
    },
    descripcion: {
        type: String,
    },
    nombre: {
        type: String,
    },
    skills: {
        type: String,
    },
    banner: {
        type: String
    },
    vacantes: {
        type: Number,
    },
    fecha_inicio: {
        type: Date
    },
    fecha_termino: {
        type: Date
    }
});

module.exports = mongoose.model('anuncios', anunciosSchema);