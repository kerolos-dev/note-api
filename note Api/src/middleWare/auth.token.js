import Jwt  from "jsonwebtoken"
import { AppError } from "../utils/appError.js";

export  const isAuthenticationToken= ((req,res,next)=>{

    // chack  login   ?   who  is  the  user  ???  token
    const {token}= req.headers ;
        
    if(!token) return next(new AppError(" user token    is  not  foud  " , 401))

 //  verfiy  token  existence 
 
 const payload =Jwt.verify(token,process.env.TOKENSECRAT)
//    user  id  
 req.payload =  payload
  
//   coll  next  controller

  return next()
})

export{
  isAuthenticationToken
}