const userModel = require("../models/user.js")
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const { hashPassword , comparedPassword } = require("../helpers/auth.js");
const UserModel = require("../models/user.js");

const test = (req, res) => {
  res.json(`Test is working`);
}

//register endpoint
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password + "db")
    //check if name was entered
    if (!username) {
      return res.json({ error: "Please enter your name" });
    }

    //check if the password is strong
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters long" });
    }

    //check email
    const exist = await userModel.findOne({ email })
    if (exist) {
      return res.json({ error: "Email already exist" })
    }

    const hashPwd = await hashPassword(password);

    const user = await userModel.create({
      username, email, password : hashPwd, 
    });

    return res.json(user);
  } catch (err) {
    console.log(err)
  }
}

//login endpoint
const loginUser = async (req, res)=>{
  try{
    const {email, password} = req.body;
    console.log(email,password)

    const user = await UserModel.findOne({email});
    if(!user){
      return res.json({error: "Account not found"});
    }
    const isMatch = await comparedPassword(password, user.password);
    if(isMatch){
      jwt.sign({email: user.email, id: user._id, username: user.username}, process.env.JWT_SECRET ,{}, (err, token)=>{
        if(err) throw err;
        res.cookie("token",token ).json(user);
      })
    }
  }catch(err){
    console.log(err)
  }
}

const getProfile = (req,res)=>{
  const {token} = req.cookies;
  if(token){
    jwt.verify(token, process.env.JWT_SECRET,{},(err,user)=>{
      if(err) throw err;
      res.json(user);
    })
  } else {
    res.json({error: "Please login first"})
  }
}

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile
};