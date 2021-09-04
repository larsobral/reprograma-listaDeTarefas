const express = require('express')
const app = express()
const cors = require('cors')

// servidor
const PORT = process.env.PORT || 8080;
const listasRouter = require('./src/routes/listas.routes')
//conectar o db
const db = require('./src/data/database')
db.connect()

//usar as rotas
app.use(cors())
app.use(express.json())

// rota http://localhost:8080/todos sendo chamada com sucesso
app.use('/todos', listasRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});