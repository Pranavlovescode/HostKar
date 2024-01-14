const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const loginSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a email"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    pass: {
      type: String,
      required: [true, "Enter a password"],
      minlength: [8, "Password should be at least 8 characters"],
    },
  },
  { timestamps: true }
);

loginSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.pass = await bcrypt.hash(this.pass, salt);
  next();
});
module.exports = mongoose.model("login", loginSchema);
