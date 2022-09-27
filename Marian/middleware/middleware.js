
const jwt=require('jsonwebtoken');



async function isAuth(req,res,next){
 
   
 const token=req.headers.token;
  
   token=req.headers.authorization? req.headers.authorization.split(' ')[1]:null;
   console.log(token);
    if(!token){
       return res.status(401).send('Unauthorized');
   }
   jwt.verify(token,"mysecret",(err,decoded)=>{
       if(err){
           return res.status(401).send('Unauthorized');
       }
       next()
   })
 
 }
module.exports={isAuth};
 