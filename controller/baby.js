const db=require('../db/db');
const babyModel=require('../models/baby');
const { ObjectId } = require('mongodb');

exports.getAll = async function (req, res,next) {
    try {
        const baby = await babyModel.find();
        const hospitalizationNumbers=[];
        baby.forEach(b => {
            hospitalizationNumbers.push( b.hospitalizationNumber,);
        });
        res.send(hospitalizationNumbers);
    }
    catch (error) {
        next(error);    }
}


exports.getBaby = async function (req, res,next) {
    try {
        const babyId=req.params.id;
        const baby = await babyModel.findOne({hospitalizationNumber:babyId});
        res.send(baby);
    }
    catch (error) {
        next(error);    }
}


exports.addBaby = async function (req, res,next) {
    try {
        const baby = new babyModel(req.body);
        const inserted = await baby.save();
        res.send(inserted);
    }
    catch (error) {
        next(error);    }
}