const express = require('express')
const router = express.Router()
const User = require("../models/user")

router.get("/", (req, res, next) => {
    // load users from db
    console.log(a.b.c)
    // User.find()...

    return res.json({ users: [] })
})

router.post("/", (req, res, next) => {
    // get user from req body and save to db
    return res.sendStatus(201)
})

module.exports = router