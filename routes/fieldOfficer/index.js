// src/routes/fieldOfficer/index.js
const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));

module.exports = router;
