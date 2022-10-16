const mongoose = require('mongoose');
const favorites = require('../Models/FavoritesModel');
const delivery = require('../Models/DeliveryInfoModel')
const users = require('../Models/UserModel');
const cart = require('../Models/CartModel');
const products = require('../Models/ProductModel');


mongoose.connect('mongodb://localhost/ecommerce');
const usersJson = {
    users: [
        {
            "username": "GARMActr",
            "password": "3b%Y032G",
            "email":"GARMActr@gmail.com"
        },
        {
            "username": "mainsale",
            "password": "045VOvb#",
            "email":"mainsale@gmail.com"
        },
        {
            "username": "uatertiv",
            "password": "3b%adsd",
            "email":"uatertiv@gmail.com"
        },{
            "username": "rowerect",
            "password": "@459HcMh",
            "email":"rowerect@gmail.com"
        },{
            "username": "lowrious",
            "password": "asdgvash",
            "email":"lowrious@gmail.com"
        },{
            "username": "nticatal",
            "password": "asdhbabsd",
            "email":"nticatal@gmail.com"
        },{
            "username": "hfoxishl",
            "password": "3b%sadn",
            "email":"hfoxishl@gmail.com"
        },{
            "username": "ragespis",
            "password": "asdjd%asbn",
            "email":"ragespis@gmail.com"
        },{
            "username": "sumetent",
            "password": "adbs217y",
            "email":"sumetent@gmail.com"
        }
    ]
};

const productsJson = {
    products:[
        {name : "shoes"  , price : 90.00, tag1 : "shoes1", gender : 0},
        {name : "Glasses", price : 225.00, tag1 : "glasses1", gender : 0},
        {name : "Hoodie" , price : 100.00, tag1 : "hoodie1", gender : 0},
        {name : "Watch"  , price : 150.00, tag1 : "watch", gender : 0},
        {name : "Plant"  , price : 85.00, tag1 : "plant1", gender : 1},
        {name : "Frame"  , price : 75.00, tag1 : "frame1", gender : 1},
        {name : "Perfume", price : 285.00, tag1 : "perfume1", gender : 1},
        {name : "Scarf"  , price : 165.00, tag1 : "scarf1", gender : 1},
        {name : "Lamp"   , price : 235.00, tag1 : "lamp1", gender : 1} 
    ]
};
async function initUsers(){
    for(let user of usersJson.users){
        await users.create(user);
    }
    return;
}
async function initProducts(){
    for(let product of productsJson.products){
        await products.create(product);
    }
    return;
}
class InitController {
    async checkDatabase(req, res){
        let usersEmpty = (await (await users.find()).length == 0)
        let productsEmpty = (await (await products.find()).length == 0)
        if(usersEmpty){
            if(productsEmpty){
                await initUsers();
                await initProducts();
                return res.status(200).json({message: 'done'});
            }
            else{
                await initUsers();
                return res.status(200).json({message: 'done'});
            }
        }
        else if(productsEmpty){
            await initProducts();
            return res.status(200).json({message: 'done'});
        }
        return res.json({message: 'database not empty'})
    }

}

module.exports ={
    InitController
}