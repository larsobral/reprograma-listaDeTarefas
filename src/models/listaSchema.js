const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
    texto: { 
        type: String,
        required: true
    },
    categoria: { 
        type: String,
        required: true
    },
    criadoEm: { 
        type: Date, 
        default: new Date 
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('lists', listaSchema)