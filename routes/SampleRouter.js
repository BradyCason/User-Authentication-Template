const { Router } = require("express");
const controller = require("../controllers/SampleController");
const router = Router();

router.get("/", controller.getUsernames)

module.exports = router