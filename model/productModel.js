const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    price:{
        type: Number,
        required: true
    },

    description : {
        type: String,
        required: true
    },

    category: {
        type : String,
        required: true
    },

    createdAt : {
        type:Date,
        default : Date.now
    },
    rating:{
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('products', productSchema)