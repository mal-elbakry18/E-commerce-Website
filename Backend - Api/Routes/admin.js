const express = require('express');
const { ProductController } = require('../Controllers/ProductController');
const { UsersController } = require('../Controllers/UsersController');
const { FavoritesController } = require('../Controllers/FavoritesController');
const { DeliveryInfoController } = require('../Controllers/DeliveryInfoController');
const { ComplaintController } = require('../Controllers/ComplaintController');

const adminApp = express();



let productController = new ProductController()
let usersController = new UsersController()
let favoritesController = new FavoritesController()
let deliveryController = new DeliveryInfoController();
let complaintsController = new ComplaintController()

//PRODUCTS
    //add Product
    adminApp.post('/products', productController.addProduct);
    //view product by name
    adminApp.get('/products/:toSearch/:value', productController.viewSpecific);
    //view all products
    adminApp.get('/products', productController.viewAll)
    //toggle Product Status
    adminApp.put('/products/status/:toSearch/:value', productController.toggleStatus)
    //delete product
    adminApp.delete('/products/:toSearch/:value', productController.delete)
    //register sale
    adminApp.put('/products/sale/:toSearch/:value/:amount', productController.registerSale)
    //update Product info
    adminApp.patch('/products/:toSearch/:value', productController.update)

//USERS
    //register User
    adminApp.post('/users', usersController.register)
    //remove User
    adminApp.delete('/users/:delete/:toSearch/:value', usersController.removeUser);
    //login
    adminApp.get('/users', usersController.login)
    //activate/Deactivate user
    adminApp.put('/users/toggle/:toSearch/:value', usersController.toggleStatus)
    //list all users
    adminApp.get('/users/all', usersController.listUsers)

    //FAVORITES
        //add product to favs
        adminApp.patch('/favorites/:value', favoritesController.addProduct)
        //remove product from favs
        adminApp.delete('/favorites/:value', favoritesController.removeProduct)
    
    //DELIVERY INFORMATION
        //add block of info
        adminApp.put('/users/delivery/:value', deliveryController.addAddress);
        //remove block of info
        adminApp.delete('/users/delivery/:value', deliveryController.removeAddress)

//COMPLAINTS
    //add complaint
        adminApp.delete('/complaints/:id', complaintsController.deleteComplaint)
    //toggle status
        adminApp.patch('/complaints/:id', complaintsController.toggleStatus)


module.exports = adminApp;