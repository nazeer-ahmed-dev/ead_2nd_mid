const multer = require('multer');  
const bcrypt = require('bcrypt');
const user_data = require('../model/model')

const homepage = async (req,res)=>{
    res.render('register',{title:"Register"})
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


const insertData = async(req,res)=>{
    let {name,email,phone,country,city,address,state,zip} = req.body
    const image = req.file.filename
    const user = new user_data({
        name:name,
        email:email,
        phone:phone,
        image:image,
        country:country,
        city:city,
        address:address,
        state:state,
        zip:zip

    })
    user.save((err)=>{
        if(err){
            res.send({message:err.message})
        }
        else{
           res.send(req.body)
        }
    })

    
}




module.exports = {
    homepage,upload,insertData
}