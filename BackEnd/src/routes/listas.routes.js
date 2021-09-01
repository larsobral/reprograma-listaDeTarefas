const express = require('express');
const router = express.Router();

const controller = require('../controllers/listcontrollers');

// listar todos os cards
router.get('/', controller.getAll)

// criar um novo card
router.post('/create', controller.createCard)

// router.patch('/:id', controller.updateStudio)

// router.delete('/:id', controller.deleteStudio)

// router.get('/estudio', controller.nomeStudio)

module.exports = router