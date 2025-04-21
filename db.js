const mongoose =require('mongoose');

const mongoURI="mongodb+srv://parikhguleria801:parikh09@inotescluster.shswmql.mongodb.net/INotes?retryWrites=true&w=majority&appName=inotescluster";

const connectToMongo= async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to database");
    }
    catch(error){
        console.error("Error occuring while connecting to database",error);
    }
}

module.exports=connectToMongo;


