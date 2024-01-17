require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const signup = require("./routes/signup")
const login = require('./routes/login')
const protected = require('./routes/protected')
const cookie = require('cookie-parser')

// Middlewares
const app = express();
app.use(express.json());
app.use(cookie())

//Routes
app.use("/api/auth", signup );
app.use('/api/login',login)
app.use('/api/protected',protected)
app.use('/api/logout',login)

// Test Routes
app.get("/", (req, res) => {
  res.send("Hi Pranav");
});
app.post("/time", (req, res) => {
  res.send("Time");
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
