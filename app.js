const express = require('express');
const app = express();
const nurseRoute=require('./route/nurse');
const babyRoute=require('./route/baby');
const db=require('./db/db');
const logger = require('./log/logger');
const path=require('path');
require('dotenv').config();
const port = process.env.PORT;

db.connect();
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use('/nurse', nurseRoute);
app.use('baby',babyRoute);

app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname,'./static/HTML/404.html'));
})

app.use((err, req, res, next) => {
    logger.error(err.message)
    res.status(500).send('something faild')
})


app.listen(port, () => {
    logger.info(`the server go on ${port}`);
})

