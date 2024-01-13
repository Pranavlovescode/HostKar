const mongoose = require("mongoose");
const {Schema} = mongoose
const loginSchema = new Schema({
  name: { type: String ,required:true},
  email: { type: String, required: true },
  pass: { type: String, required: true },
},{timestamps:true});

module.exports = mongoose.model('login',loginSchema)