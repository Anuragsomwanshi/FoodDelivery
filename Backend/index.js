import express from 'express'
import cors from 'cors'
const app = express();
const port = process.env.PORT || 4000;
import {connectdb} from './config/db.js'
import foodrouter from './routes/foodroute.js';
import userRouter from './routes/userroute.js';
import 'dotenv/config'

 app.use(express.json());
 app.use(cors())

 connectdb();
 
 // api
 
 
app.use('/api/food',foodrouter)
app.use('/api/user',userRouter)
app.use('/images',express.static('upload'));

app.get('/',(req,res)=>{
    res.send("api working");
 })

app.listen(port,()=>{
    console.log("server started at port:",port);
})
  // 