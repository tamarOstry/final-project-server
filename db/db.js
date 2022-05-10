const mongoose=require('mongoose');

class db{

   constructor(){     
   }

   async connect(){
       const url= 'mongodb://srv1:27017/finalProjectT&S';
       await mongoose.connect(url);
       console.log(`connected seccesffuly`);
   };
}

module.exports=new db();