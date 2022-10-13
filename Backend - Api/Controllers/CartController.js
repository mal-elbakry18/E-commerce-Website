const mongoose = require('mongoose');
const cart = require('../Models/CartModel');
const products = require('../Models/ProductModel');
const ObjectId = require('mongodb').ObjectId

mongoose.connect('mongodb://localhost/ecommerce');

class CartController{
    async addProduct(req, res){
        let input = req.params;
        let quantity = parseInt(input.quantity);
        let usersCarts = await cart.where('userId').equals(input.userId);
        let usersCart = usersCarts[0];
        for(let product of usersCart.products){
            if(product.productId == input.productId){
                product.quantity += quantity; 
                return res.json(await usersCart.save())
            }
        }
        usersCart.products.push({
            productId : input.productId,
            quantity : input.quantity 
        });

        return res.json(await usersCart.save());
    }

    async removeProduct(req, res){
        let input = req.params;
        let quantity = parseInt(input.quantity);
        let usersCarts = await cart.where('userId').equals(input.userId);
        let usersCart = usersCarts[0];
        for(let product of usersCart.products){
            if(product.productId == input.productId){
                if(product.quantity <= quantity){
                    usersCart.products.splice(usersCart.products.indexOf(product));
                    return res.json(await usersCart.save());
               }
               else{
                    product -= quantity;
                    return res.json(await usersCart.save())
               }
            }
        }
        return res.json({message: `product is not in this user's cart`})
    }
}

module.exports = {
    CartController
}