const express = require("express")
const Athlete = require("./models/athletes")

let routes = express.Router()

routes.route("/athletes").get(async (req, res) => {
    const data = await Athlete.find({})
    res.json(data)
})

//#1 - Read All
routes.route("/athletes").get(async (req, res) => {
    try {
        const data = await Athlete.find({})
        res.json(data)
    } catch (error) {
        throw new Error("ERROR FETCHING ATHLETES", error);

    }
})

//#2 - Read one
routes.route("/athletes/:id").get(async (req, res) => {
    try {
        const id = req.params.id
        const data = await Athlete.find({ IdAthlete: id })
        res.json(data)
    } catch (error) {
        throw new Error(`ERROR FETCHING ATHLETE`, error);
    }
})

//#3 - Create One
routes.route("/athletes").post(async (req, res) => {
    try {
        const newAthlete = {
            Lastname: req.body.lastname,
            Firstname: req.body.firstname,
            Gender: req.body.gender,
            Age: req.body.age,
        }
        const data = await Athlete.insertMany(newAthlete)
        res.json(data)
    } catch (error) {
        throw new Error("ERROR CREATING NEW ATHLETE", error);
    }
})

//#4 - Update One
routes.route("/athletes/:id").put(async (req, res) => {
    try {
        const updatedAthlete = {
            $set: {
                Lastname: req.body.lastname,
                Firstname: req.body.firstname,
                Gender: req.body.gender,
                Age: req.body.age,
            }
        }
        const data = await Athlete.updateOne({ IdAthlete: req.params.id }, updatedAthlete)
        res.json(data)
    } catch (error) {
        throw new Error("ERROR UPDATING ATHLETE", error);
    }
})

//#5 - Delete One
routes.route("/athletes/:id").delete(async (req, res) => {
    try {
        const data = await Athlete.deleteOne({ IdAthlete: req.params.id })
        res.json(data)
    } catch (error) {
        throw new Error("ERROR DELETING ATHLETE", error);
    }
})

module.exports = routes