const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.post('/', (req, res) => {
    db.addUser(req.body)
    .then(user => {
        return res.json(user)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    db.updateUser(id, req.body)
    .then(user => {
        return res.json(user)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/', (req, res) => {
    db.getUsers()
    .then(users => {
        return res.json(users)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:email', (req, res) => {
    const email = req.params.email
    db.getUserByEmail(email)
    .then(user => {
      console.log(user)
        return res.json(user)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
