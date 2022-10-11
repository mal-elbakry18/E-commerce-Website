const mongoose = require("mongoose");

const favoritesSchema = mongoose.Schema({
    userId: {type:String, required:true, unique: true},
    products:[
        {
            productId:{
                type: String,
            },
            count:{
                type: Number,
            }
        }
    ]    
},
{ timestamps: true }
)

module.exports = mongoose.model('favorites', favoritesSchema)