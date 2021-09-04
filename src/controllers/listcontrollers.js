const mongoose = require('mongoose');
const Lista = require('../models/listaSchema');

// lista todos os card da lista
const getAll = async (req, res) => {
  const cards = await Lista.find()
  res.json(cards)
}

// buscar card pelo id gerado pelo mongo
const getCardById = async (req, res) => {
  try {
    const resquestId = req.params.id;
    const card = await Lista.findOne({ _id: resquestId })
    if(card == null) {
      return res.status(404).json({message: 'Card não encontrado'})
    }
    res.status(200).json(card)
  } catch (error){
    res.status(500).json({ message: error.message })
  }
}
//   Lista.findOne({ _id: resquestId }, function (err, cardFound) {
//     if (err) {
//       res.status(500).send({ message: err.message })
//     } else {
//       if (cardFound) {
//         res.status(200).send(cardFound.toJSON())
//       } else {
//         res.status(404).send({ "message": "Card não encontrado" })
//       }
//     }
//   })
// };

// const getAllvida = async (req, res) => {
//   const cards = await Lista.find().populate('categoria')
//   const cardsFiltrados = cards.filter(card => card.categoria == "vida")
//   res.json(cardsFiltrados)
// }

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

const updateTexto = async (req, res) => {
  try {
    const card = await Lista.findById(req.params.id)
    if(card == null) {
      return res.status(404).json({message: 'Card nao encontrado'})
  }
    if (req.body.texto != null) {
      card.texto = req.body.texto
    }
    if (req.body.texto != null) {
      card.categoria = req.body.categoria
    }

    const cardAtualizado = await card.save()
    res.status(200).json(cardAtualizado)
  } catch (err) {
    res.status(500).json({message: error.message})
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Lista.findById(req.params.id)
    if (card == null) {
      return res.status(404).json({message: 'card nao encontrado!'})
    }
    await card.remove()
    res.status(200).json({ message: 'Card deletado com sucesso!'})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  getAll,
  createCard,
  updateTexto,
  getCardById,
  deleteCard
}