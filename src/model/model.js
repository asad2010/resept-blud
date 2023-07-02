const mongoose = require('mongoose')


const reschema = new mongoose.Schema({
    image: {type: String, require: true},
    name: {type: String, require: true},
    type: {type: Array, require: true},
    whatYouNeed: {type: String, require: true},
    howToDo: {type: String, require: true},
})
const Resepts = mongoose.model("resepts", reschema)
module.exports = Resepts