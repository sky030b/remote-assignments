const express = require("express");
const router = express.Router();
const loadMemberData = require("../controllers/memberData");

router.get("/", loadMemberData);

module.exports = router;