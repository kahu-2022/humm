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
    db.addCounsellingBooking(req.body)
    .then(booking => {
        console.log("returned from the db", booking)
        return res.json(booking)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router