const express = require("express")
const mongoose = require("mongoose")
const Athelete = require("./models/athletes")
const routes = require("./routes")

mongoose.connect('mongodb://127.0.0.1:27017/Sports')
    .then(() => {
        console.log("DB CONNECTED")
    })
    .catch(e => {
        console.log(e)
    })

const app = express(routes)

app.use(routes)

app.listen(8000, () => {
    console.log("LISTENING ON PORT 8000")
})
