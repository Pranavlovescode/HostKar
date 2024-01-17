const Login = require("../models/signup");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Login the user

const handleUserLogin = async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await Login.findOne({ email });

    if (!user) return res.status(404).json({ message: "Email not found" });

    const validPassword = await bcrypt.compare(pass, user.pass);

    if (!validPassword)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "HostKar website secret"
    );
    res.cookie('token', token, { httpOnly: true });
    res.json({ token });
    console.log("token :",token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
  handleUserLogin,
  logout,
};
