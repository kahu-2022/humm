const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getRoomIssues(req.body)
    .then(issue => {
        return res.json(issue)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
    db.addRoomIssues(req.body)
    .then(issue => {
        console.log("returned from the db", issue)
        return res.json(issue)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router