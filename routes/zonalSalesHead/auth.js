const express =
    require("express");

const router =
    express.Router();

const authController = require("../../controller/zonalSalesHead/auth");

router.post("/login", authController.login);

module.exports = router;