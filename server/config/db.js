import mongoose from "mongoose";//Object Data Modeling library in Node.js

const connectToMongo=async()=>{
    try{
        //Connect to db
        const res =  await mongoose.connect("mongodb+srv://thanushan:thanushan@e-smart.wl1g3bh.mongodb.net/?retryWrites=true&w=majority");
     if(res){
      console.log("connected sucessfully");
     }
      }catch(error){
          console.log(error);
      }
};

export default connectToMongo;
