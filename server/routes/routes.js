const express  = require('express')
const {homepage} = require('../controller/controller')
const router = express.Router();

router.get('/',homepage)


module.exports = router