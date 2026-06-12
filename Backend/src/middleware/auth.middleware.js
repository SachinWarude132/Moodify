const userModel =  require("../models/user.model")
const jwt  =  require("jsonwebtoken")
const blacklistModel = require("../models/blacklist.model")
const redis = require("../config/cache")
 
async function authUser (req, res , next){
 const token = req.cookies.token ;

 if(!token){
    return res.status(401).json({
        message:"Token not Provided"
    })
 }

 const isTokenBlacklisted = await redis.get(token)
  if(isTokenBlacklisted){
    return res.status(401).json({
        message:"Invalide token"
    })
  }


 try{

     const decoded = jwt.verify( 
        token ,
        process.env.JWT_SECRET 
     )

     req.user = decoded

      next();

 } catch(err){
    return res.status(401).json({
        message :"Invalide token"
    })
 }

}

module.exports = {authUser}