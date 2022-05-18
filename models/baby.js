const mongoose=require('mongoose');
const schema=mongoose.Schema;
//const careDetailsInterface=require('./careDetailsInterface');

const babyModel=new schema({
    identity:{
        type:String,
        required:true,
        minlength:9,
        maxlength:9,
        unique:true,
    },
    hospitalizationNumber:{
        type:String,
        required:true,
        unique:true,
    },
    motherIdentity:{
        type:String,
        required:true,
        minlength:9,
        maxlength:9
    },
    birthDate:{
        type:String,
        required:true,
        minlength:2,
    },
    //babyCare:[careDetailsInterface],
},
{timestamps:true})

module.exports=mongoose.model('babies',babyModel);


