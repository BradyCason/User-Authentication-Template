const { Router } = require("express");
const controller = require("../controllers/SampleController");
const router = Router();

router.get("/", controller.sampleGet)

module.exports = router