const carts = require('../Models/CartModel');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce');

async function getTotal(cartId){
    let cart = carts.findById(cartId)
    console.log(cart);
}

module.exports = {
    getTotal
}
