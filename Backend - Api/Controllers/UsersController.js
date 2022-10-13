const mongoose = require('mongoose');
const favorites = require('../Models/FavoritesModel');
const ObjectId = require('mongodb').ObjectId;
const delivery = require('../Models/DeliveryInfoModel')
const users = require('../Models/UserModel');
const cart = require('../Models/CartModel');

const { hashPassword } = require('./hashPassword');
const jwt = require("jsonwebtoken");

mongoose.connect('mongodb://localhost/ecommerce');

class UsersController{
    async register(req, res){
        try{
            let data = req.body;
            let user = await users.create(data);
            //create and save favorites
            await favorites.create({
                userId : user.id,
                products:[] 
            })
            //create and save delivery information
            await delivery.create({
                userId: user.id,
                info: []
            })
            //create and save Cart
            await cart.create({
                userId: user.id,
                products : []
            })
            await user.save();
            res.json({message: 'user created Successfully'})
        }
        catch(e){
            res.json({message: e.message})
        }
    }
    async removeUser(req, res){
        try {
            let input = req.params;
            let user = await users.where(input.toSearch).equals(input.value);
            //find users favorites
            let associatedFavorites = await favorites.where('userId').equals(ObjectId(user[0]._id).toString());
            //find users delivery info
            let deliveryInfo = await delivery.where('userId').equals(ObjectId(user[0]._id).toString())
            //find users cart
            let cart = await cart.where('userId').equals(ObjectId(user[0]._id).toString());
            await associatedFavorites[0].delete();
            await deliveryInfo[0].delete();
            await cart[0].delete();
            await user[0].delete();
            res.json({message: 'User deleted successfully'})
        } catch (e) {
            res.json({message: e.message})
        }
    }
    async login(req, res){
            let data = req.body;
            let searchByUsername = await users.where('username').equals(data.username);
            let password = await hashPassword(data.password);
            let searchByPassword = await users.where('password').equals(password);
            if(searchByUsername.length > 0){
                if(searchByPassword.length > 0){
                    const user = searchByPassword[0];
                    // const accessToken = jwt.sign(
                    //     {
                    //         id: user._id,
                    //         isAdmin: user.isAdmin,
                    //     },
                    //     "tok",
                    //         {expiresIn:"6h"}
                    //     );
                    // user.token = accessToken;
                    res.json(user);
                }
                else{
                    res.json({message: 'wrong password'})
                }
            }
            else{
                res.json({message: 'user not found'})
            }
    }
    async toggleStatus(req, res){
        try{
            let input = req.params
            let result = await users.where(input.toSearch).equals(input.value);
            let user = result[0]
            if(user.isActive) user.isActive = false;
            else user.isActive = true;
            res.json(await (user.save()))
        }
        catch(e){
            res.json({message: e.message})  
        }
    }

    async listUsers(req, res) {
        try
        {
            const all = await users.find({});
            res.status(200).json(all);
        }catch(err){
            res.status(500).json(err);
        }
    }
    
}

module.exports = {
    UsersController
}