const mongoose = require('mongoose');
const Lista = require('../models/list');

// lista todos os card da lista
const getAll = async (req, res) => {
  const cards = await Lista.find()
  res.json(cards)
}

// criar novo card
const createCard = async (req, res) => {
  const card = new Lista({
    _id: new mongoose.Types.ObjectId(),
    texto: req.body.texto,
    categoria: req.body.categoria,
    criadoEm: req.body.criadoEm
  })
  const cardJaExiste = await Lista.findOne({texto: req.body.texto})
  if (cardJaExiste) {
    return res.status(409).json({error: 'Card já cadastrado.'})
  }
  try{
    const novoCard = await card.save()
    res.status(201).json(novoCard)
  } catch(err) {
    res.status(400).json({ message: err.message})
  }
}

// const getAll = async (req, res) => {
//   console.log('pegou todos')
//   const card = await Cards.find().populate('list')
//   console.log(card)
//   try {
//     res.status(201).json(card)
//   }catch {
//     res.status(500).json({message: 'Cards não encontrados tente novamente'})
//   }
// }

module.exports = {
  getAll,
  createCard
}