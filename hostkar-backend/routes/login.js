const express = require("express");
const router = express.Router();
const { handleUserLogin ,logout} = require("../controllers/loginController");
router.post("/", handleUserLogin);
router.get('/',logout)
module.exports = router;
