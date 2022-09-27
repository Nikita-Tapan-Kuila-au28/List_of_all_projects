import UserModel from "../Models/usersModel.js";
import { mongooseUrl} from "../database/logindb.js";
import bcrypt from "bcrypt"



export const getUser=async(req,res)=>{
    mongooseUrl();

    const id=req.params.id;
    
   

    try {
        const user=await UserModel.findById(id);
       
       if(user){
        const {password,...otherdetails}=user._doc;
        return res.status(200).json(otherdetails)
       }
      else{
         res.status(404).json("No user Found");
      }

        
    } catch (error) {
       res.status(500).json({message:error.mesage})
    }


}

/////// update user //////
export const updateUser=async(req,res)=>{
    mongooseUrl();
    const id=req.params.id;
   const{currentUserId,currentAdminStatus,password}=req.body;


    try {
        if(password){
            req.body.password= await bcrypt.hash(password,10)
        }




        if(id===currentUserId || currentAdminStatus){
            const user=await UserModel.findByIdAndUpdate(id,req.body,{new:true});
        
            res.status(200).json(user)
        
        }
       
      
       }


        
    catch (error) {
        return res.status(500).json({message:error.mesage})
    }


}


export const deleteUser=async(req,res)=>{
    mongooseUrl();
    const id=req.params.id;
   const{currentUserId,currentAdminStatus}=req.body;


    try {
        if(id===currentUserId || currentAdminStatus){
            const user=await UserModel.findByIdAndDelete(id);
                     
            res.status(200).json("Deleted successfully",user)
        
        }
       
      
       }


        
    catch (error) {
        return res.status(500).json({message:error.mesage})
    }


}


export const followUser=async(req,res)=>{
    mongooseUrl();
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(id===currentUserId){
        res.status(403).json("You Cannot Follow Yourself")
    }
    else{
        try {
            const followAnotherUser=await UserModel.findById(id);
            const followingAnotherUser=await UserModel.findById(currentUserId);
            if(!(followAnotherUser.followers.includes(currentUserId))){
               await followAnotherUser.updateOne({$push:{followers:currentUserId}});
                await followingAnotherUser.updateOne({$push:{following:id}});
           
           res.status(200).json("Followed")
            }
            else{
                res.status(200).json("You are Already following the User")
            }

            
        } catch (error) {
            return res.status(500).json({message:error.mesage})
        }
    }

}

export const unFollowUser=async(req,res)=>{
    mongooseUrl();
    const id=req.params.id;
    const {currentUserId}=req.body;

    if(currentUserId===id){
        res.status(403).json("You Cannot unFollow Yourself")
    }
    else{
        try {
            const followAnotherUser=await UserModel.findById(id);
            console.log( followAnotherUser)
            const followingAnotherUser=await UserModel.findById(currentUserId);
          
            if(followAnotherUser.followers.includes(currentUserId)){
               await followAnotherUser.updateOne({$pull:{followers:currentUserId}});
                await followingAnotherUser.updateOne({$pull:{following:id}});
           
           res.status(200).json("unFollowed")
            }
            else{
                res.status(200).json("You are cannot  unfollow the User")
            }
        
    } catch (error) {
       res.status(500).json({message:error.mesage})
    }

    }




}


