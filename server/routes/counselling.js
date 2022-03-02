const express = require('express')
const router = express.Router()

const db = require('../db/db')
// const checkJwt = require('../auth0.js')


router.get('/', (req, res) => {
    db.getCounsellingBookings()
    .then(bookings => {
        return res.json(bookings)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
    db.addCounsellingBooking(req.body)
    .then(booking => {
      console.log("sgsdfa", booking)
        return res.json(booking)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
