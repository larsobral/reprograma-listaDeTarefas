const mongoose = require('mongoose');
const card = require('../models/list');

// lista todos os card da lista
//ds

const getAll = (req, res) => {
  card.find(function (err, card) {
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(200).send(card);
      console.log('ok')
  })
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