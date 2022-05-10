const db=require('../db/db');
const nurseModel=require('../models/nurse');
const { ObjectId } = require('mongodb');

exports.getByNameAndPassword=async function(req,res,next){
    try{
        const userName=req.query.userName;
        const password=req.query.password;
        const nurse= await nurseModel.findOne({userName:userName, password: password });
        res.send(nurse);
    }
    catch(error){
        next(error);
    }
}

exports.addNurse = async function (req, res,next) {
    try {
        const nurse = new nurseModel(req.body);
        const inserted = await nurse.save();
        res.send(inserted);
    }
    catch (error) {
        next(error);    }
}

exports.updateNurse = async function (req, res,next) {
    if(req.body){
        try {
            const id = ObjectId(req.params.id);
            const {firstName,lastName,userName,password,email,phoneNumber} = req.body;
            const data={
                firstName:firstName,
                lastName:lastName,
                userName:userName,
                email:email,
                password:password,
                phoneNumber:phoneNumber
            }
            const updateNurse = await nurseModel.findByIdAndUpdate(id,data,{
                new:true
            });
            res.send(updateNurse);
        }
        catch (error) {
            next(error);        }
    } 
}

exports.deleteNurse = async function (req, res ,next) {
    try {
        const id = ObjectId(req.params.id);
        const nurseToDelete = await nurseModel.deleteOne(id);
        res.send(`removed`);
    }
    catch (error) {
        next(error);    }
}