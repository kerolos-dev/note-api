import  mongoose, {Types } from "mongoose"


const  noteSchema=new  mongoose.Schema({
    content:{
        type:  String ,
        required: true},
    isCompleted:{
        type:Boolean,
        default: false,
    },
    user:[{type:Types.ObjectId ,  rfe:'user'}]
},{
    //  this is for opptine   _vt and  createdAt and  apdateAT 
    timestamps: true 

})
 



export const  notemodel=mongoose.model('note',noteSchema)