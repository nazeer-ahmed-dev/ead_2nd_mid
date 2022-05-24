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
            cb(null,file.filename+"_"+Date.now()+"_"+file.originalname)
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

const home_call =  async(req,res)=>{
    user_data.find().exec((err,users)=>{
        if(err)
        {
            res.send({message:"error"})
        }
        else{
            res.render('home',{title:"Homeaa",users:users,})
        }
    })
    // res.render('home',{title:"Home"})
}




const delete_by_id = async(req,res)=>{
    const {id} = req.params
    await user_data.findByIdAndRemove(id).exec();
    res.redirect("/home")
}

const update_by_id = async (req,res)=>{
    const {id} = req.params
    let {name,email,phone,country,city,address,state,zip} = req.body
    const image = req.file.filename

    await user_data.findByIdAndUpdate(id,{
        $set:{
            name:name,
            email:email,
            phone:phone,
            image:image,
            country:country,
            city:city,
            address:address,
            state:state,
            zip:zip        }
    })

    res.redirect('/home')
}

const to_print  = async (req,res)=>{
    const {id} = req.params
    // const value = await user_data.findById(id)
    // res.render('search',{title:"Home",users:value,})
    user_data.findById(id).exec((err,users)=>{
        if(err)
        {
            res.send({message:"error"})
        }
        else{
            res.render('editing',{title:"Editing",users:users,})
        }
    })

}
module.exports = {
    homepage,upload,insertData,home_call,delete_by_id,update_by_id,to_print
}