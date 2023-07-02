const mongoose = require('mongoose')

module.exports = async function db_conn(){
    try {
        await mongoose.connect("mongodb://localhost:27017/resepts", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        })
        console.log('db runned')
    } catch (error) {
        console.log(error.message)
    }
}