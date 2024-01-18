const Login = require("../models/signup");



const handleSignup = async (req, res) => {
  try {
    const { name, email, pass } = req.body;
    const result = await Login.create({ name, email, pass });

    res.status(200).send(result);
    console.log(result);
  } catch (error) {
    
    res.status(400).json({ error });
    console.log(error);
  }
};

module.exports = { handleSignup };
