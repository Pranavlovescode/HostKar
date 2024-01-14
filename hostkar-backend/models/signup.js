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
  const salt = await bcrypt.genSalt(10);
  this.pass = await bcrypt.hash(this.pass, salt);
  next();
});

loginSchema.statics.login=async function(email,pass){ 
  
  if(!email || !pass){
    throw Error('All fields must be filled')
  }
  const user = await this.findOne({email})
  const match = await bcrypt.compare(pass,user.pass)
  if(!user){
    throw Error('Incorrect email')
  }
  if(!match){
    throw Error('Incorrect password')
  }
  return user
}

module.exports = mongoose.model("login", loginSchema);
