const mongoose = require('mongoose');

let DeliveryInfoSchema = mongoose.Schema({
    userId: {type:String, required:true, unique:true},
    options: [
        {
            address: {type: String},
            phoneNumber: {type: Number},
        }
    ]
})

module.exports = mongoose.model('delivery', DeliveryInfoSchema)