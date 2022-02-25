const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.post('/', (req, res) => {
    console.log(req.body)
    db.addCounsellingBooking(req.body)
    .then(booking => {
        //return res.json(books)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router