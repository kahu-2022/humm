const express = require('express')
const router = express.Router()

const db = require('../db/db')

// localhost:3000/api/v1/activities
// get list of activities from database
router.get('/', (req, res) => {
    db.getActivities()
    .then(acts => {
        return res.json(acts)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

// add an activity to the list
router.post('/', (req, res) => {
    const newAct = req.body
    db.addActivities(newAct)
    .then(idArr => {
        const id = idArr[0]

        newAct.id = id

        res.json(newAct)

    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router