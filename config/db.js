const mongoose=require("mongoose")

const connection=async()=>{
try{
 await  mongoose.connect(process.env.MONGODB_URL)
  console.log("Db Connected Successfully..😊😊");
}catch(error){
    console.log("Failed to connect Db..😢")
}
}

module.exports=connection;