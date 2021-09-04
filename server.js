// const express = require('express')
// const app = express()
// const cors = require('cors')

// // servidor
// const PORT = process.env.PORT || 8080;
// const listasRouter = require('./src/routes/listasRoutes')
// //conectar o db
// const db = require('./src/data/database')
// db.connect()

// //usar as rotas
// app.use(cors())
// app.use(express.json())

// // rota http://localhost:8080/todos sendo chamada com sucesso
// app.use('/todos', listasRouter)

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

const app = require("./src/app")

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})