import express from  "express"
import noteRouter from './src/note/note.router.js';
import { connectdb } from "./DB/connectine.js";
import userRouter from "./src/user/user.router.js";
import dotenv  from 'dotenv';
import { globalError } from "./src/middleWare/globalError.js";
dotenv.config()
const app = express()
 
//   express parse
app.use(express.json());


// start db
await connectdb()

// router user
app.use("/user",userRouter)
// router notes
app.use("/note",noteRouter)


// start  express
app.get('/', (req, res) => res.send('Hello World!'))


// globalError
app.use(globalError)
//  not  found page  hander 
app.use("*", (req, res, next) => {
    next(new Error( `not found endPoint${req.originalUrl}`, 400));
  });

app.use((err,req,res,next)=>{
  res.status(err.ststusCode).json({error : err.message})
})
app.listen(process.env.PORT, () => console.log(`  app listening on port ${process.env.PORT}!`))