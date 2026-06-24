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
    try{
        const {name,email, password, profileImageUrl}=req.body;
        
        //checking if user already exists
        const userExits =await User.findOne({email});
        if(userExits){
            return res.status(400).json({message:"User already exists"});
        }
        //Hash password
        const salt =await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);

        //Create new user
        const user=await User.create({
            name,
            email,
            password:hashPassword,
            profileImageUrl,
        });

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            profileImageUrl:user.profileImageUrl,
            token :generateToken(user._id),
        });
    }catch(error){
        res.staus(500).json({message:"Server error",error:error.message})
    }        
};

//@desc     Login user
//@route    POST /api/auth/register
//@access   Public
const loginUser=async (req, res)=>{
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email});
        if(!user){
            return res.status(500).json({message:"Invalid email or password"});
        }
        //compare parrword
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(500).json({message:"Invalid email or password"});
        }

        //return user data with JWT
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            profileImageUrl:user.profileImageUrl,
            token:generteToken(user._id),
        })
    }catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

//@desc     Get user profile
//@route    GET /api/auth/profile
//@access   Private(Requires JWT)
const getUserProfile=async (req, res)=>{
    try{
        const user=await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(404).json({message:"server error",error:error.message});
        }
    }catch(errro){
        res.status(500).json({message:"server  error ",error:error.message});
    }
};

module.exports={registerUser, loginUser, getUserProfile};