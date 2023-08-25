const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const delivery = require("../Models/DeliveryInfoModel");
mongoose.connect("mongodb://localhost/ecommerce");

class DeliveryInfoController {
  async addAddress(req, res) {
    try {
      let parameters = req.params;
      let input = req.body;
      let deliveries = await delivery.where("userId").equals(parameters.value);
      let deliveryInfo = deliveries[0];
      for (let option of deliveryInfo.options) {
        if (
          option.address == input.address &&
          option.phoneNumber == input.phoneNumber
        ) {
          return res.json({
            message: "address and phone number already exist",
          });
        }
      }
        deliveryInfo.options.push({
            address: input.address,
            phoneNumber: input.phoneNumber,
        });
        res.json(await deliveryInfo.save());
        } catch (e) {
        res.json({ message: e.message });
        }
  }

  async removeAddress(req, res) {
    try {
        let parameters = req.params;
        let input = req.body;
        // let index = -1;
        // let deliveries = await delivery.where("userId").equals(parameters.value);
        // let deliveryInfo = deliveries[0];
        // for (let option of deliveryInfo.options) {
        //     if(option.address == input.address && option.phoneNumber == input.phoneNumber){
        //         index = deliveryInfo.options.indexOf(option);
        //         break;
        //     }
        // }
        res.json(await delivery.updateMany({userId: parameters.value}, {$pull :{'options': {
            address : input.address,
            phoneNumber : input.phoneNumber
        }}})) 

    } catch (e) {
      res.json({ message: e.message });
    }
  }
}

module.exports = {
  DeliveryInfoController,
};
