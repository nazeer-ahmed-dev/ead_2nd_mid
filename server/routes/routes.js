const express  = require('express')
const {homepage,upload,insertData,home_call,delete_by_id,update_by_id,to_print} = require('../controller/controller')
const router = express.Router();

router.get('/',homepage)
router.post('/add',upload,insertData)
router.get('/home',home_call)
router.get('/delete/:id',delete_by_id)
router.post('/update/:id',upload,update_by_id)
router.get('/edit/:id',to_print)
module.exports = router