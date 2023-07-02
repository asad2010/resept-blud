const express = require('express')
const app = express()
const router = require('./src/routes/routes');
const db = require('./db')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use('/', router)

db()
app.listen(7777, ()=>{
    console.log('server runned');
})
