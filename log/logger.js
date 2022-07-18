
const winston = require('winston');
const mongo = require('winston-mongodb');
require('dotenv').config();
const {CONNECTION_STRING} = process.env;

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'log/logs.log'
        }),
        new winston.transports.File({
            level: 'info',
            filename: 'log/logs.log'
        }),
        new winston.transports.MongoDB({
            level: 'error',
            db: CONNECTION_STRING,
            options: {
                useUnifiedTopology: true
            },
            collection: 'logs'
        })
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss.SSS'
        }),
        winston.format.printf(info => `${info.level}:${info.timestamp}:${info.message}`),
    )
}

const logger = winston.createLogger(logConfiguration);
module.exports = logger;