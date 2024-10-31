const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/Sports')

const athleteSchema = new mongoose.Schema({
    IdAthlete: Number,
    Lastname: String,
    Firstname: String,
    Gender: String,
    Age: Number,
    Sports: {
        Play: [String],
        Referee: [String],
        Coach: [String],
    },
})

module.exports = mongoose.model("Athlete", athleteSchema)