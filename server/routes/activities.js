const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getActivities()
    .then((acts) => {
      return res.json(acts)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/', (req, res) => {
  db.getSuggestions(req.body)
    .then((suggestion) => {
      return res.json(suggestion)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  db.addSuggestion(req.body)
    .then((suggestion) => {
      return res.json(suggestion)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
