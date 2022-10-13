const mongoose = require('mongoose')
const complaints = require('../Models/ComplaintsModel');
const users = require('../Models/UserModel')
const ObjectId = require('mongodb').ObjectId

mongoose.connect('mongodb://localhost/ecommerce');

class ComplaintController{
    async addComplaint(req, res){
        try{
            let data = req.body;
            let userAssociated = await users.where('_id').equals(ObjectId(req.params.id)) 
            res.json(await complaints.create({
                userId : userAssociated[0].id,
                message: data.message
            }))
        }catch(e){
            res.json({message: e.message})
        }
    }

    async deleteComplaint(req, res){
        try {
            let id = ObjectId(req.params.id);
            let complaint = await complaints.where('_id').equals(id);
            res.json(complaint[0].delete())
        } catch (e) {
            res.json({message: e.message})
        }
    }
    async toggleStatus(req, res){
        try {
            let id = ObjectId(req.params.id);
            let complaint = await complaints.where('_id').equals(id);
            if(complaint[0].isHandled == false){
                complaint[0].isHandled = true;
                res.json(await complaint[0].save())
            }
            else{
                res.json({message: 'complaint already handled, Would you like to delete it?'})
            }
        } catch (e) {
            res.json({message: e.message})
        }
    }
}

module.exports = {
    ComplaintController
}