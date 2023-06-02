const express = require('express')
const app = express()
const routes = require('./route/product')
const port = 7700
const mongoose = require('mongoose')


// app.get('/api', (req,res)=>{
//     res.send('home route')
// })
//mongo db connection
mongoose.connect('mongodb+srv://Taiwo:6gOZHSJKe1twJ4PU@cluster0.icizaap.mongodb.net/')
const db = mongoose.connection
db.on('error',(err) => console.log(err))
db.once('open', ()=> {console.log('database working fine today')})

app.use(express.json())


app.use('/api', routes)

app.listen(port, () =>  console.log('running on port '))


















