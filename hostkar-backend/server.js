require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const signup = require("./routes/signup")
const login = require('./routes/login')
const cookie = require('cookie-parser');
const { authenticateMiddleware } = require("./middleware/checkLogin");
const cors = require('cors');

const app = express();
app.use(cookie())
app.use(express.json());
app.use(authenticateMiddleware)
app.use(cors({ credentials: true, origin: 'http://localhost:3000' })); // Update with your frontend URL

//Routes
app.use("/api/auth", signup );
app.use('/api/login',login)

// Test Routes
app.get("/", (req, res) => {
  res.send("Hi Pranav");
});
app.post("/time", (req, res) => {
  res.send("Time");
});
app.get("/protected-route/cart", authenticateMiddleware, (req, res) => {
  // Accessible only if the user is authenticated
  res.json({ message: "Protected Route" ,user: req.user});
});

// Connection String
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to MongoDB & server is running on the ${process.env.PORT}`
      );
    });
  })
  .catch((err) => console.error(err));
