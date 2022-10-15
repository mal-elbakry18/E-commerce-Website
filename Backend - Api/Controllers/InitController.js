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
        {name : "shoes"  , price : 90.00, imageUrl : "/assets/pics/shoes1.webp"},
        {name : "Glasses", price : 225.00, imageUrl : "/assets/pics/glasses1.webp"},
        {name : "Hoodie" , price : 100.00, imageUrl : "/assets/pics/hoodie1.webp"},
        {name : "Watch"  , price : 150.00, imageUrl : "/assets/pics/watch.webp"},
        {name : "Plant"  , price : 85.00, imageUrl : "/assets/pics/plant1.webp"},
        {name : "Frame"  , price : 75.00, imageUrl : "/assets/pics/frame1.webp"},
        {name : "Perfume", price : 285.00, imageUrl : "/assets/pics/perfume1.webp"},
        {name : "Scarf"  , price : 165.00, imageUrl : "/assets/pics/scarf1.webp"},
        {name : "Lamp"   , price : 235.00, imageUrl : "/assets/pics/lamp1.webp"} 
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