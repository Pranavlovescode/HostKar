const Login = require("../models/signup");
const bcrypt = require("bcrypt");
const handleSignup = async (req, res) => {
  const { name, email, pass } = req.body;
  const hashPassword = await bcrypt.hash(pass, 10);
  const result = await Login.create({ name, email, pass: hashPassword });

  res.status(200).send(result);
  console.log(result);
};

module.exports = { handleSignup };
