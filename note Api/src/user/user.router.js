import  { Router } from "express";
import * as  user from './user.controlier.js';
import {  checkEmailHashPaassSinUp, checkEmailHashPassTokLog,  } from "../middleWare/checkEmailHashPaass.js";
import { validation } from './../middleWare/validation.js';
import { loginSchema, logoutSchema, singupSchema } from "./validation.schema.js";
 


const   userRouter=Router()

     userRouter.post('/singup',validation(singupSchema),checkEmailHashPaassSinUp,user.singup)
     userRouter.post('/login',validation(loginSchema),checkEmailHashPassTokLog,user.login)
     userRouter.post('/logout',validation(logoutSchema),user.logout)







export  default userRouter;
