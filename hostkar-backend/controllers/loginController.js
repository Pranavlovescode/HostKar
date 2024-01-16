const Login = require("../models/signup");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Login the user

const handleUserLogin = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const find = await Login.findOne({ email });
    if (!find) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    try {
      const match = await bcrypt.compare(pass, find.pass);
      if (match) {
        const token = jwt.sign({ email }, "HostKar website secret", {
          expiresIn: "1h",
        });
        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

        res.status(200).json({ email, token });
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleUserLogin,
};
