const Login = require("../models/signup");
const jwt = require("jsonwebtoken");

// Login the user
const handleToken = (id) => {
  return jwt.sign({ id }, "HostKar website secret");
};
const handleUserLogin = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const result = await Login.login(email, pass);
    const token = handleToken(result._id);
    res.cookie("jwt", token);    
    res.status(200).json({ email, token });
    console.log({email,token});
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  handleUserLogin,
};
