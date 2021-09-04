const express = require('express')
const app = express()

//conectar o db
const db = require('./src/data/database')
db.connect()

//usar as rotas
app.use(express.json())

// rota http://localhost:8080/todos sendo chamada com sucesso
const listasRouter = require('./src/routes/listas.routes')
app.use('/todos', listasRouter)

// servidor
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});