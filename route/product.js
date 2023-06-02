const { request } = require('express')
const express = require('express')
const router = express.Router()
const productSchema =require('../model/productModel')

router.get('/product' ,(req,res)=> {
    res.send('this is a get request')

})



router.post('/product' ,(req,res)=> {
   const newProduct = new productSchema({
    name : req.body.name,
    price : req.body.price,
    description : req.body.description,
    category : req.body.category,
    createdAt : req.body.createdAt,
    rating : req.body.rating
   })


   newProduct.save()
   .then((product) => {
    res.status(201).json(product)
   } )
   .catch((err) => {
    res.status(400).json({error: err.message})
   })
})


router.put('/product' ,(req,res)=> {
    res.send('this is a put request')
    
})

router.delete('/product/:id' ,(req,res)=> {
    res.send('this is a delete request today,,')

})
module.exports = router