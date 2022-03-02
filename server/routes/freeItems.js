const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getFreeItems()
    .then((freeItem) => {
      return res.json(freeItem)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/', (req, res) => {
  db.getFreeItemsById(req.body)
    .then((freeItem) => {
      return res.json(freeItem)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  db.addFreeItem(req.body)
    .then((freeItem) => {
      return res.json(freeItem)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/', (req, res) => {
  db.claimFreeItem(req.body)
    .then((claimedFreeItem) => {
      return res.json(claimedFreeItem)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
