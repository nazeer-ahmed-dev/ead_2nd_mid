const multer = require('multer');  
const bcrypt = require('bcrypt');

const _model = require('../model/model')

const homepage = async (req,res)=>{
    res.render('register')
}

const storage = multer.diskStorage(
    {
        destination:function(req,file,cb)
        {
            cb(null,"./uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null,"nazeer_ahmed"+"_"+Date.now()+"_"+file.originalname)
        }
    }
);

const upload = multer({
    storage:storage,
}).single("image");




module.exports = {
    homepage,upload
}