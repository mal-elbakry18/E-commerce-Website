const mongoose = require('mongoose')
const favorites = require('../Models/FavoritesModel')
const users = require('../Models/UserModel')

mongoose.connect('mongodb://localhost/ecommerce');

class FavoritesController{
    async addProduct(req, res){
        try{
            console.log('inside function');
            let input = req.params;
            let prodId = req.body.id;
            let favSearch = await favorites.where('userId').equals(input.value);
            let favComponent = favSearch[0];
            for(let product of favComponent.products){
                if(product.productId === prodId){
                    product.count++;
                    return res.json(await favComponent.save());
                }
            }    
            //not existing logic
            favComponent.products.push({productId: prodId, count: 1});
            res.json(await favComponent.save());     
        }
        catch(e){
            res.json({
                message: e.message
            })
        }
    }

    
    async removeProduct(req, res){
        let input = req.params;
        let prodId = req.body.id;
        let favSearch = await favorites.where('userId').equals(input.value);
        let favComponent = favSearch[0];
        
            for(let product of favComponent.products){
                if([product.productId === prodId]){
                    if(product.count > 1)   {
                        product.count--
                        return res.json(await favComponent.save())
                    }

                    if(product.count == 1){
                        let index = favComponent.products.indexOf(product);
                        favComponent.products.splice(index, 1)
                        return res.json(await favComponent.save());
                    }
                }
            }    
        res.json({message: `product is not in user's favorites`})
    }
}

module.exports = {
    FavoritesController
}