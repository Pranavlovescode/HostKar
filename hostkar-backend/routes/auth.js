const express = require("express");
const router = express.Router();

const { handleSignup } = require("../controllers/controller");
const { handleUserLogin } = require("../controllers/loginController");

router.post("/", handleSignup);
router.post("/login", handleUserLogin);
module.exports = router;
