import  Joi    from  "joi";

//   schema  validation  note  


const   schemaNote=  Joi.object({
    content:Joi.string().alphanum()
    .min(3)
    .max(300)
    .required(),
    isCompleted:Joi.string()
    .min(3)
    .max(300)
    .required(),
    user:Joi.string()
    .min(3)
    .max(300)
    .required(),
})



export{
    schemaNote,
}