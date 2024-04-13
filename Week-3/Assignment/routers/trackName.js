const express = require("express");
const router = express.Router();
const trackName = require("../controllers/trackName");

router.get("/", trackName); // get 版本
// router.post("/", trackName); // post 版本

module.exports = router;
