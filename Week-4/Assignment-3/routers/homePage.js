const express = require("express");
const router = express.Router();
const loadHomePage = require("../controllers/homePage");

router.get("/", loadHomePage);

module.exports = router;