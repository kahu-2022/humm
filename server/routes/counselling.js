const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getCounsellingBookings(req.body)
    .then(bookings => {
        return res.json(bookings)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
    console.log("you are in the router file")
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