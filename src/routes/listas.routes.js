const express = require('express');
const router = express.Router();

const controller = require('../controllers/listcontrollers');


router.get("/oi", (req, resp)=>{
  resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})

// listar todos os cards
router.get('/', controller.getAll)

// lista card pelo id
router.get('/:id', controller.getCardById)

// lista card por categoria
// router.get('/:id', controller.getCardByCategoria)

// criar um novo card
router.post('/create', controller.createCard)

// altera o texto de um card por id
router.patch('/update/:id', controller.updateTexto); 

// router.patch('/:id', controller.updateStudio)

router.delete('/delete/:id', controller.deleteCard)

// router.get('/vida', controller.getAllvida)

module.exports = router