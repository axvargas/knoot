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
        type: String,
    },
    fecha_inicio: {
        type: String
    },
    fecha_termino: {
        type: String
    }
});

module.exports = mongoose.model('anuncios', anunciosSchema);