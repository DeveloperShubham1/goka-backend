const express =
    require("express");

const router =
    express.Router();

const authController = require("../../controller/salesOfficer/auth");

router.post("/login", authController.login);

module.exports = router;