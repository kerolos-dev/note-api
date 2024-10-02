import  bcrypt  from 'bcrypt';
import { usermodel } from '../../DB/model/user.model.js';
import  Jwt  from 'jsonwebtoken';
import { tokenmodel } from '../../DB/model/token.model.js';
import { AppError } from '../utils/appError.js';
import { notemodel } from '../../DB/model/note.model.js';
import { catchError } from './catshError.js';

const  checkEmailHashPaassSinUp =catchError(
        async(req,res,next)=>{
        // data
        const {email,password,rePassword}=req.body
        // check  password for  erPassword
        if(password !== rePassword) return next(new AppError('password not  matched',405 ))
        // check  email  and  send    request  
        const  Isuser= await usermodel.findOne({email})
        if(Isuser)return next(new AppError('email  is not afound',401))
        // hash   
        req.body.passwordpassword = bcrypt.hashSync(req.body.password, 10);
        next();
    
    }
    

) 

const  checkEmailHashPassTokLog = catchError(async(req,res,next)=>{
    // data
    const {email,password}=req.body
    // check  email  and  password  and  hashnewpassword
    const  user= await usermodel.findOne({email})
      
    if(!user  && bcrypt.compareSync(password , user.password ))return next(new AppError('email and password  is  not afound',401))
    //  send  token  form  user  front   //  generate  token  

    const  token=Jwt.sign({uers:user._id , user: user.email},process.env.TOKENSECRAT)
    req.token=token
    // seva token  in  the token collection 
    await  tokenmodel.create({ token, user:user._id , agent:req.headers['user-agent'] })
    // chek  token  if is valid  
    const tokendb=tokenmodel.findOne({token , isValid:true})
    
    if(!tokendb)return next(new AppError('token exprid ! ',406 ))
    next();
})

const  checkUserNoteOwner=catchError(async(req,res,next)=>{
    //  data  
  const {id} = req.params   //node id  and
  const {user}=  req.headers// user token
  const {isCompleted}  = req.body    
   // // check user
   const isUser= await usermodel.find(user)
   if(!isUser)return next(new AppError('user  is  not  found  ',401))
    //  //check  note   
     const chNotUser= await notemodel.findByIdAndUpdate({  _id:id },{isCompleted })
     if(!chNotUser) return next(new AppError("  note  is  found ",401))
     next();

})


export{
    checkEmailHashPaassSinUp,
    checkEmailHashPassTokLog,
    checkUserNoteOwner
}