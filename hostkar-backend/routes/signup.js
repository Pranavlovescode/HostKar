const express = require("express");
const router = express.Router();

const { handleSignup } = require("../controllers/controller");


router.post("/", handleSignup);

module.exports = router;
