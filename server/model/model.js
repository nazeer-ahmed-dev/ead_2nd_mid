const mongoose = require('mongoose')
const userdata = mongoose.Schema(
    {
       name:
       {
            type:String,
            required:true
        },
        email:
       {
            type:String,
            required:true
        },
        phone:
        {
            type:String,
            required:true
        }
        , 
        country:
        {
            type:String,
            required:true
        }
        , 
        city:
        {
            type:String,
            required:true
        }
        , 
        address:
        {
            type:String,
            required:true
        },
        state:
        {
            type:String,
            required:true
        }

        , 
        zip:
        {
            type:String,
            required:true
        }

    }
);

const Regstr = mongoose.model('registration',userdata);
module.exports = Regstr