import mongoose, { Types } from "mongoose";

const  tokenSchema=new  mongoose.Schema({
    token:{
        type:String,
        require:true,
    },
    user:{
        type:Types.ObjectId,
        ref:"usermodel",
    },
    isValid:{
      type:Boolean,
      default:true,  
    },
    //  agent  يعني هو  فاتح  منين
    agent:{
        type:String,
    },
    expirdAt:{ 
        type:String,
    }

},{
    //  this is for opptine   _vt and  createdAt and  apdateAT 
    timestamps: true 
})


export const tokenmodel=mongoose.model('token', tokenSchema)