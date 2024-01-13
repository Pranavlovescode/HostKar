require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const signup = require("./routes/auth")

const app = express();
app.use(express.json());


//Routes
app.use("/api/auth", signup );


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
