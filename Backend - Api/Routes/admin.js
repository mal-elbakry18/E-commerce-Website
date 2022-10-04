const express = require('express');
const { ProductController } = require('../Controllers/ProductController');
const bodyParser = require('body-parser')

const adminApp = express();

adminApp.use(bodyParser.json())

let productController = new ProductController()

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

module.exports = adminApp;