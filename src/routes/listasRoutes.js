const express = require('express');
const router = express.Router();
const controller = require('../controllers/listcontrollers');


router.get('/', controller.getAll)

router.get('/:id', controller.getCardById)

// lista card por categoria
// router.get('/:id', controller.getCardByCategoria)

router.post('/cadastrar', controller.createCard)

router.patch('/atualizar/:id', controller.updateTexto)

router.delete('/deletar/:id', controller.deleteCard)

module.exports = router