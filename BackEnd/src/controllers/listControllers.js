const mongoose = require('mongoose')
const Card = require('../models/list')

// lista todos os card da lista
console.log(Card)
const getAll = async (req, res) => {
  const cards = await Card.find()
  console.log(cards)
  res.status(200).json(cards)
};

const createCard = async (req, res) => {
  const card = new Card({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    text: req.body.text,
    categoria: req.body.categoria
  })
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