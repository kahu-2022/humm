const express = require('express')
const router = express.Router()

const db = require('../db/db')

// localhost:3000/api/v1/sessions
// get list of group sessions from database
router.get('/', (req, res) => {
    db.getSessions()
    .then(sesh => {
        return res.json(sesh)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})


module.exports = router