const express  = require('express')
const {homepage,upload,insertData} = require('../controller/controller')
const router = express.Router();

router.get('/',homepage)
router.post('/add',upload,insertData)


module.exports = router