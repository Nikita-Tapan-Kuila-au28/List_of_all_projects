import UserModel from "../Models/usersModel.js";
import { mongooseUrl} from "../database/logindb.js";
import bcrypt from "bcrypt";

//registering new user
export const register=async(req,res)=>{
   mongooseUrl();
    const{username,email_id,password,firstname,lastname}=req.body;
    const hashpswd=await bcrypt.hash(password,10)
    const newUser= new UserModel ({username,email_id,password:hashpswd,firstname,lastname});
    try {
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}

// login the existing user
export const loggedIn=async(req,res)=>{
   mongooseUrl();
    const {username,password}=req.body;

    try {
        const user=await UserModel.findOne({username:username});

        if(!user){
            return res.status(500).json("Invalid username or password");

        }
        if(await bcrypt.compare(password,user.password)) {
            return res.send("LOGIN");
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }



}