const express = require("express");
const router = express.Router();
const sayHello = require("../controllers/home");

router.get('/', sayHello);

module.exports = router;