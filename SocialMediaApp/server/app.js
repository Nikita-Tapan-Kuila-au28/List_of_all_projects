import express from "express";

import bodyParser from "body-parser";

import dotenv from "dotenv"
 import AuthRoute from "./Routes/Authroute.js";
 import UserRoute from "./Routes/UserRoute.js";
 import postRoute from "./Routes/postRoute.js";



const port=process.env.PORT || 4000;

//Routes
const app=express();




//middlewares

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use("/auth", AuthRoute)
app.use('/user',UserRoute)
app.use("/post",postRoute)

dotenv.config();





app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})