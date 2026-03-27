const Users = require("../model/UserModel");
const bcrypt=require("bcrypt");
//user Register controller

const addUser = async (req, res) => {
  try {
    const { name, email, phone, gender, address, profilePic, password } =
      req.body;


  const encryptedPassword=await bcrypt.hash(password,10);
    await Users.insertOne({
        name:name,
        email:email,
        phone:phone,
        gender:gender,
        address:address,
        profilePic:profilePic,
        password:encryptedPassword
   });
    res.status(200).json({ message: "user registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "server not found failed register" });
  }
};

//get all users controller

const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    if (!allUsers) {
      res.status(404).json({ message: "users not found" });
    }
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({ message: "server not found" });
  }
};



// LOGIN CONTROLLER

const login=async(req,res)=>{
    try {
       const {username,password}=req.body;
       const foundUser=await Users.findOne({email:username});
       if(!foundUser){
        res.status(404).json({message:"User Not found please check username"});
       } 

       const checkedPassword=await bcrypt.compare(password,foundUser,password);
       if(!checkedPassword){
        res.status(400).json({message:"wrong password.."});
       }
       res.status(200).json({message:"Login Successful.."});
    
    } catch (error) {
       res.status(500).json({message:"server not found"}); 
    }
};
module.exports = { addUser, getUsers,login };
