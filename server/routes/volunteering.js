const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getVolunteering()
    .then((volunteering) => {
      return res.json(volunteering)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
