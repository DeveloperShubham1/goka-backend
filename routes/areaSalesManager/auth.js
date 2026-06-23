const express =
    require("express");

const router =
    express.Router();

const authController = require("../../controller/areaSalesManager/auth");

router.post("/login", authController.login);

module.exports = router;