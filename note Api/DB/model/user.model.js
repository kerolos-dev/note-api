import  mongoose, {Types } from "mongoose"
 
const  userSchema=new  mongoose.Schema({
    name:{
        type:String ,
        min:[3," too short name"],
        max:[50,"too  long name"]},
    email:{
        type:String,
        unique: true,
        required: true,
        lowercase:true,
        trim: true,
    },
    password:{
        type:String,
        min:[3," too short name"],
        max:[30,"too  long name"]},
        note:{type:Types.ObjectId ,  rfe:'notemodel'}
        


},{
    //  this is for opptine   _vt and  createdAt and  apdateAT 
    timestamps: true 

})
 



export const  usermodel=mongoose.model('user',userSchema)

// userSchema.pre('save',function(){
//     this.password=bcrypt.hashSync(this.password,  8)
    
//     })
    