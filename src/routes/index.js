const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    response.status(200).json({
        "titulo": "API to-do list {lista de tarefas}",
        "version": "1.0.0",
        "mensagem": "Projeto Final - Larissa Viella Sobral - Turma: On12"
    })
})
module.exports = router