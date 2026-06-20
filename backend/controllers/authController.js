const User =require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

//Generate JWT Token
const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{ expiresIn:"7d"});
}

//@desc     register a new user
//@route    POST/api/auth/register
//@access   Pubic
const registerUser=async(req, res)=>{

};

//@desc     Login user
//@route    POST /api/auth/register
//@access   Public
const loginUser=async (req, res)=>{

};

//@desc     Get user profile
//@route    GET /api/auth/profile
//@access   Private(Requires JWT)
const getUserProfile=async (req, res)=>{

};

module.exports={registerUser, loginUser, getUserProfile};