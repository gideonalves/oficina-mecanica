var express = require('express');
var router = express.Router();
const auth = require('../controllers/authController')

/* GET home page. */
router.get('/', auth.index);
router.post('/', auth.login);

module.exports = router;