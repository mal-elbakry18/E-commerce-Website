const products = require("../Models/ProductModel");
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;

mongoose.connect('mongodb://localhost/ecommerce')

class ProductController {
    //api route handler functions
    async addProduct(req, res){
        try{
        let data = req.body;
        res.json(await products.create(data));
        }catch(e){
           res.json({message: 'Please choose a unique name'})
        }
    }
    async viewSpecific(req, res){
        try{let input = req.params; 
        res.json(await products.where(input.toSearch).equals(input.value))}
       catch(e){
        res.json({message: e.message});
       }
    }
    async viewAll(req, res){
        try{        
            res.json(await products.find());
        }
        catch(e){
            res.json({message: e.message})
        }
    }
    async toggleStatus(req, res){
        try{
            let input = req.params
            let result = await products.where(input.toSearch).equals(input.value);
            let product = result[0]
            if(product.isActive) product.isActive = false;
            else product.isActive = true;
            res.json(await (product.save()))
        }
        catch(e){
            res.json({message: e.message})  
        }
    }
    async delete(req, res){
        try {
            let input = req.params;
            let product = await products.where(input.toSearch).equals(input.value);
            await product[0].delete();
            res.json({message: 'product deleted successfully'})
        } catch (e) {
            res.json({message: e.message})
        }
    }
    async registerSale(req, res){
        let input = req.params;
        let product = await products.where(input.toSearch).equals(input.value);
        product[0].count -= input.amount;
        res.send(await product[0].save())
    }
    async update(req, res){
        try{
            let input = req.params;
            let newData = req.body;
            let toSearch = input.toSearch;
            let result = await products.updateOne({toSearch : input.value}, newData);
            res.json(result);
        }catch(e){
            res.json({message : e.message});
        }
    }
}

module.exports = {
    ProductController
}