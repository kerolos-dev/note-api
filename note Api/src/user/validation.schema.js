import Joi from "joi";



const   singupSchema= Joi.object({
    name:
    Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        email: 
        Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:
     Joi.string()
     .min(3)
     .max(30)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    rePassword:Joi.ref('password'),
})


const  loginSchema= Joi.object({

    email: 
    Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:
    Joi.string()
    .min(3)
    .max(30)
   .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
})

const  logoutSchema= Joi.object({
    token: Joi.string().alphanum().min(3).max(200).required()
})


export{
    singupSchema,
    loginSchema,
    logoutSchema

}