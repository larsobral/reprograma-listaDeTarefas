const express = require('express');
const app = express();

// conectar ao banco de dados

const db = require('./src/data/database');
db.connect();

// rotas
app.use(express.json());

const listRouter = require('./src/routes/list.routes');
app.use('/lista', listRouter)
console.log(listRouter)

const port = 8080;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))