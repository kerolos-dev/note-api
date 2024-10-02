import { notemodel } from "../../DB/model/note.model.js"
import { usermodel } from "../../DB/model/user.model.js"
import { AppError } from "../utils/appError.js"


//  create note  
const  createNote=async(req, res, next)=>{
     // data   user id  and  content
     const  {content,user}= req.body
      // // check user
      const isUser= await usermodel.findById(user)
      if(!isUser)return next(new AppError('user  is  not  found  ',401))
     // creat   content 
     const  isContent= await notemodel.insertMany({content , user })
     //send response  
    res.json({success:true , massage:'success', isContent})
       
}


// updata note

const updataNote=async(req,res,next)=>{ 
      //  response
    res.json({success:  true ,  message:  "updata  succse"})
}

// delet  note

const  deletNote=async(req,res,next)=>{
     // delet  note 
     await notemodel.deleteOne()
     //respons 
     res.json({success:true , masseage: "  success delet  note "})

}
// get    note

const  getAllNote=async(req,res,next)=>{
    // get  all 
      const  getAllNote =   await notemodel.find().populate({
        path:"user",
        select:'-_id'
      })// fiend 
     
    //  respons
    res.json({success:true ,getAllNote  ,  massage :"succcess get all  notes "})
}

// get user  note 


const   getAllUser=async(req,res,next)=>{

    const {id}=req.params // user id  
      // get  all  user   note
    const isUserNote=await  notemodel.find({user: id})  
 
     //  respons 
     res.json({success:true, isUserNote , massage :"get  all  user  note  "})


}



export{
    createNote,
    updataNote,
    deletNote,
    getAllNote,
    getAllUser

}