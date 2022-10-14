const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    tag1: { type: String, required: false },
    tag2: { type: String, required: false },
    tag3: { type: String, required: false },
    sizesAvailable: {
        type: [String],
        required:false
    },
    colorsAvailable: [{
        type: String,
        required:true
    }],
    price: { type: Number },
    count: {
      type: Number,
      default: 1,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
