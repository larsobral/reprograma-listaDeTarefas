const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const listaSchema = new mongoose.Schema({
    texto: { type: String },
    categoria: { type: String },
    criadoEm: { 
        type: Date, 
        default: new Date 
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('lists', listaSchema)