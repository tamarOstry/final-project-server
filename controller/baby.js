const db=require('../db/db');
const babyModel=require('../models/baby');
const { ObjectId } = require('mongodb');

exports.getAll = async function (req, res,next) {
    try {
        const babies = await babyModel.find();
        res.send(babies);
    }
    catch (error) {
        next(error);    }
}