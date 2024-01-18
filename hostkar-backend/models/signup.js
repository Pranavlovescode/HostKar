const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const loginSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

loginSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.pass = await bcrypt.hash(this.pass, salt);
  next();
});

module.exports = mongoose.model("login", loginSchema);
