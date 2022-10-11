const mongoose = require('mongoose');
const carts = require('../Models/CartModel')
const orders = require('../Models/OrderModel')
const delivery = require('../Models/DeliveryInfoModel');
const { CartController } = require('./CartController');
const { getTotal } = require('./getTotal');

mongoose.connect('mongodb://localhost/ecommerce');

class OrderController{
    async checkout(req, res){
        let userId = req.params.userId;
        let cart = await carts.findOne({userId: userId});
        let deliveryInfo = await delivery.findOne({userId : userId})
        // let cartController = new CartController();
        res.json(await orders.create({
            userId: userId,
            products: cart.products,
            amount: getTotal(cart._id),
            deliveryInfoId: deliveryInfo.id,
            status: 'Pending'
        }));
    }
}

module.exports = {
    OrderController
}