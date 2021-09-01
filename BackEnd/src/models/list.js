const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const listaSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String },
    documentNumber: { type: String },
    travelId: { type: String }
}, {
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const lista = mongoose.model('list', listaSchema);

// exportar o model para ser utilizado
module.exports = lista;