const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../Controllers/hashPassword");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   let hashedPassword = await hashPassword(this.password);
//   this.password = hashedPassword;
//   next();
// });

module.exports = mongoose.model("User", userSchema);
