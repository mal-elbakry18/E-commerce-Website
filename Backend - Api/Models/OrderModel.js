const mongoose = require("mongoose");
// add payment option
const orderSchema = new mongoose.Schema(
    {
        userId : {type: String, required: true},
        products:
        [
            {
                productId :
                {
                    type: String,
                },
                quantity: 
                {
                    type : Number,
                    default : 1,
                },
            },
        ],
        amount : {type: Number, required : true},
        deliveryInfoId : {
            type: String,
            required: true
        },
        status: 
        {
            type: String,
            default : "Pending",
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("orders", orderSchema);