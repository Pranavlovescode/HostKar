const express = require("express");
const router = express.Router();

const { authenticateMiddleware } = require("../middleware/checkLogin");


router.get("/", authenticateMiddleware, (req, res) => {
    // Accessible only if the user is authenticated
    res.json({ message: "Protected Route" ,user: req.user});
  });
  
module.exports=router