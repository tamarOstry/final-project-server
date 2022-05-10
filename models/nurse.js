const mongoose=require('mongoose');
//const password = require('password');
const schema=mongoose.Schema;

const nurseModel=new schema({
    firstName:{
        type:String,
        required:true,
        minlength:2
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        minlength:2
    },
    password:{
        type:String,
        required:true,
        //validate:[Password,'this password is not valid']
    },
    email:{
        type: String,
        unique:true,
        //validate:[isEmail,'this email is not valid']
    },
    phoneNumber:{
        type:String,
        required:true,
        minlength:7,
        maxlength:14
    }

},
{timestamps:true})

module.exports=mongoose.model('nurse',nurseModel);