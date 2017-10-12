const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')
router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.json(users)
    }
    catch (err) {
        res.send(err)
    }
})
module.exports = router