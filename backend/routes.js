const express = require("express")
const Athlete = require("./models/athletes")

let routes = express.Router()

routes.route("/athletes").get(async (req, res) => {
    const data = await Athlete.find({})
    res.json(data)
})

//#1 - Read All
//#2 - Read one
//#3 - Create One
//#4 - Update One
//#5 - Delete One

module.exports = routes