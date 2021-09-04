const mongoose = require('mongoose');
const Lista = require('../models/listaSchema');

// lista todos os card da lista
const getAll = async (req, res) => {
  const cards = await Lista.find()
  res.json(cards)
}

// buscar card pelo id gerado pelo mongo
const getCardById = async (req, res) => {
  const resquestId = req.params.id
  Lista.findOne({ _id: resquestId }, function (err, cardFound) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      if (cardFound) {
        res.status(200).send(cardFound.toJSON())
      } else {
        res.status(204).send();
      }
    }
  })
};

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
    // tentar encontrar um card por id
    const card = await Lista.findById(req.params.id)
    // se não encontrar 
    if (req.body.texto != null) {
      card.texto = req.body.texto
    }
    const cardAtualizado = await card.save()
    res.status(200).json(cardAtualizado)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Lista.findById(req.params.id)
    const novaLista = await card.remove()
    res.status(200).json(novaLista)
  } catch (err) {
    res.status(409).json({error: 'Card já foi deletado.'})
  }
}

module.exports = {
  getAll,
  createCard,
  updateTexto,
  getCardById,
  deleteCard
}