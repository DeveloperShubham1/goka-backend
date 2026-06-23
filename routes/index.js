const express = require("express");
const router = express.Router();

router.use("/admin", require("./admin"));
router.use("/areaSalesManager", require("./areaSalesManager"));
router.use("/coordinator", require("./coordinator"));
router.use("/fieldOfficer", require("./fieldOfficer"));
router.use("/regionalSalesOfficer", require("./regionalSalesOfficer"));
router.use("/salesOfficer", require("./salesOfficer"));
router.use("/zonalSalesHead", require("./zonalSalesHead"));

module.exports = router;
