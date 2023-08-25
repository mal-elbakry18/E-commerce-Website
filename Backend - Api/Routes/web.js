const express = require('express');
const { ProductController } = require('../Controllers/ProductController');
const { UsersController } = require('../Controllers/UsersController');
const { FavoritesController } = require('../Controllers/FavoritesController');
const { DeliveryInfoController } = require('../Controllers/DeliveryInfoController');
const { ComplaintController } = require('../Controllers/ComplaintController');
const { CartController } = require('../Controllers/CartController');
const { OrderController } = require('../Controllers/OrderController');


const webApp = express();

let productController = new ProductController();
let usersController = new UsersController();
let favoritesController = new FavoritesController();
let deliveryController = new DeliveryInfoController();
let complaintController = new ComplaintController();
let cartController = new CartController();
let orderController = new OrderController();

//PRODUCTS
    //view product by name
    webApp.get('/products/:toSearch/:value', productController.viewSpecific);
    //view all products
    webApp.get('/products', productController.viewAll)
    //register sale
    webApp.put('/products/sale/:toSearch/:value/:amount', productController.registerSale)

//USERS
    //register User
    webApp.post('/users', usersController.register);
    //login
    webApp.get('/users', usersController.login)
    //activate/Deactivate user
    webApp.put('/users/toggle/:toSearch/:value', usersController.toggleStatus);
    webApp.get('/users/all', usersController.listUsers);

    //FAVORITES
        //add product to favs
        webApp.patch('/favorites/:value', favoritesController.addProduct)
        //remove product from favs
        webApp.delete('/favorites/:value', favoritesController.removeProduct)

    //DELIVERY INFORMATION
        //add block of info
        webApp.put('/users/delivery/:value', deliveryController.addAddress);
        //remove block of info
        webApp.delete('/users/delivery/:value', deliveryController.removeAddress)

//COMPLAINTS
    //add complaint
        webApp.post('/complaints/:id', complaintController.addComplaint)
    //recall complaint
        webApp.delete('/complaints/:id', complaintController.deleteComplaint)
//CART
    //add product
        webApp.post('/cart/add/:productId/:quantity/:userId', cartController.addProduct)
    //remove product
        webApp.delete('/cart/remove/:productId/:quantity/:userId', cartController.removeProduct)
    //calc total of cart
        // webApp.get('/cart/total/:userId', cartController.calculateTotal)
//Orders
    //confirm order
        webApp.post('/order/:userId', orderController.checkout);
    //get order status
        webApp.get('/order/:orderId')
    //list all orders by user id
        webApp.get('order/all/:userId')
module.exports = webApp;