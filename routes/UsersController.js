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


router.post('/', async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body.user)
        res.json(newUser)
    } catch (err) {
        res.send(err)
    }

})
module.exports = router