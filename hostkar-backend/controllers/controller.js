const Login = require("../models/signup");

const handelError = (err) => {
  console.log(err.message, err.code);
  let error = { name: "", email: "", pass: "" };
  if (err.message.includes("login validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  if (err.code === 11000) {
    error.email = "Email already registered";
    return error;
  }
  return error;
};
const handleSignup = async (req, res) => {
  try {
    const { name, email, pass } = req.body;
    const result = await Login.create({ name, email, pass });

    res.status(200).send(result);
    console.log(result);
  } catch (error) {
    const errors = handelError(error);
    res.status(400).json({ errors });
  }
};

module.exports = { handleSignup };
