const express = require("express");
const router = express.Router();
const mathController = require("../controllers/mathController");
const validateInput = require("../middleware/validateInput");

router.get('/fibonacci/:n', validateInput, mathController.getFibonacci);
router.get('/factorial/:n', validateInput, mathController.getFactorial);

module.exports = router;