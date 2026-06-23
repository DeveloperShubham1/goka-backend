const express =
    require("express");

const router =
    express.Router();

const authController = require("../../controller/fieldOfficer/auth");

router.post("/login", authController.login);

module.exports = router;