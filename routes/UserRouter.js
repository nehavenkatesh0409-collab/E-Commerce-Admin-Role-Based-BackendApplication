const express=require("express");
const routes=express.Router();
const {addUser,getUsers,login}=require("../controller/userController")
routes.post("/register",addUser);
routes.get("/get-users",getUsers);
routes.post('/login',login);

module.exports=routes;