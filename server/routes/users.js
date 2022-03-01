const express = require('express')
const router = express.Router()

const db = require('../db/db')



router.post('/', (req, res) => {
    console.log("am i getting here")
    db.addUser(req.body)
    .then(user => {
        return res.json(user)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})


router.get('/', (req, res) => {
    console.log("am i getting here")
    db.getUsers()
    .then(users => {
        return res.json(users)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
