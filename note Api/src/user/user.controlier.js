import { usermodel } from "../../DB/model/user.model.js"
import { tokenmodel } from "../../DB/model/token.model.js"
import { catchError } from "../middleWare/catshError.js"
//   singup  
  const singup=catchError(async(req,res,next)=>{
    //  creat  user 
    const  user= await usermodel.insertMany(req.body)
  //send response  
  res.json({success:true ,  massage:'success',user })
  })


// login  
const login=catchError(async(req,res,next)=>{
  const token=req.token
  console.log(token);
   //send     
  res.json({success:true  , massage:'success ,  user exies',token})

})

//   logout
  const logout=catchError(async(req,res,next)=>{
   // data
  const {token}=req.headers
  // // change  isValid   in the  token model
  await tokenmodel.findByIdAndUpdate({token} , {isValid: false})
     //  //send response  
     return  res.json({success:true  , massage:'useer  log out !'})

})






export{
  singup,
  login,
  logout
}





