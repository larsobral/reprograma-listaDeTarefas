const express = require('express')
const router = express.Router()
const controller = require('../controllers/listControllers')

router.get('/', controller.getAll)

router.post('/create', controller.createCard)

// router.patch('/:id', controller.updateStudio)

// router.delete('/:id', controller.deleteStudio)

// router.get('/estudio', controller.nomeStudio)

module.exports = router