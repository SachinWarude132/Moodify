const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authMiddleware = require("../middleware/auth.middleware")
const blacklistModel = require("../models/blacklist.model")
const redis  =require("../config/cache")

const registercontroller = async(req, res)=>{

    const {username,email,password} = req.body

    const isAlreadyRegistered = await userModel.findOne({
        $or:[
            {username},{email}
        ]
    })
 
   if(isAlreadyRegistered){
    return res.status(400).json({
        message: "user already registered with the same email or username"
    })
   }
 console.log(req.body);
    console.log(password);
   const hash = await bcrypt.hash(password,10)

   const user = await userModel.create({
    username,
    email,
    password:hash
   })
 const token = jwt.sign({
    id:user._id,
username: user.username },
process.env.JWT_SECRET,{
    expiresIn:"1d"
})

res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 24 * 60 * 60 * 1000
});

res.status(201).json({

    message:"User registered successfully",
    user :[{
        id: user._id,
        username:user.username,
        email:user.email
    }]
})

}

const logincontroller = async(req,res)=>{
    

    const {username,email,password} = req.body;

    const user = await userModel.findOne({
        $or:[{email},{username}]
    });



    if(!user){
        return res.status(400).json({
            message:"Invalid credentials"
        })
    }

    const isPasswordcorrect = await bcrypt.compare(password,user.password)
    

     if(!isPasswordcorrect){
        return res.status(400).json({
            message:"Invalid credentials"
        })
     }

     const token = jwt.sign({
        id:user._id,
        username:user.username
     },
    process.env.JWT_SECRET,{
        expiresIn:"1d"
    })

  res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 24 * 60 * 60 * 1000
});

}

const getme = async (req,res)=>{
    const {id} = req.user
    const user = await userModel.findById(id)

    res.status(200).json({
        user:{
            id : user._id,
            username: user.username,
            email:user.email
        }
    })

}

const logoutcontroller = async(req,res)=>{

    const token = req.cookies.token 
    res.clearCookie("token")

     await redis.set(token , Date.now().toString(),"EX",60*60)
    res.status(200).json({
        message:'User Logout successfully'      
        
    })
}

module.exports={
    registercontroller,
    logincontroller,
    getme,
    logoutcontroller
}