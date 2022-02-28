const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getFood()
    .then(food => {
        return res.json(food)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get('/', (req, res) => {
  db.getFoodById(req.body)
    .then(food => {
        return res.json(food)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
    db.addFood(req.body)
    .then(food => {
        console.log("returned from the db", food)
        return res.json(food)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.patch('/', (req, res) => {
    db.claimFood(req.body)
    .then(claimedFood => {
      return res.json(claimedFood)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
  })
})

module.exports = router