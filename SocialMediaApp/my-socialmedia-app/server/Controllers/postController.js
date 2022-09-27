import postModel from "../Models/postModel.js";
import UserModel from "../Models/usersModel.js";
import { mongooseUrl} from "../database/logindb.js";
import mongoose from "mongoose";


export const createPost=async(req,res)=>{
    mongooseUrl();
    const newPost= new postModel(req.body);
    try {
        await newPost.save();
        res.status(200).json("Sucessfully post created")
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}


export const getPost=async(req,res)=>{
    mongooseUrl();

    const id=req.params.id;
    try {
        const user= await postModel.findById(id);
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(403).json("user didnt post anything")
        }
        




    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}
export const updatePost=async(req,res)=>{
    mongooseUrl();
    const id=req.params.id;
    const {userId}=req.body;
    try {
        
        const post=await postModel.findById(id);
       
        
        if  (post.userId===userId  ){

           await post.updateOne({$set:req.body})


            res.status(200).json("post updated");
            console.log(post)
        }
        else{
            res.status(403).json("Cannot update");
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}


export const deletePost=async(req,res)=>{
    mongooseUrl();
const id= req.params.id;
const {userId}=req.body;


try {
   const post=await postModel.findById(id);
   if(post.userId===userId){
    await post.deleteOne();
    res.status(200).json("post deleted");
   }
   else{
    res.status(403).json("Cannot delete");
}
  
} catch (error) {
    res.status(500).json({message:error.message})
}
}

export const postLikes=async(req,res)=>{
    mongooseUrl();
    const id=req.params.id;

    const {likedUserId}=req.body;
    try {
       const post=await postModel.findById(id);
        if(!post.likes.includes(likedUserId)){
            await post.updateOne({$push:{likes:likedUserId}})
            res.status(200).json("post liked");

        }
        else{
            await post.updateOne({$pull:{likes:likedUserId}})
            res.status(200).json("post unliked");
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }




}

export const postTimeLine=async(req,res)=>{
    mongooseUrl();
    const userId=req.params.id;
    try {
        const currentUserPosts=await postModel.find({userId:userId});
        const followingUserPost= await UserModel.aggregate([
            {
                $match:{
                    _id:new mongoose.Types.ObjectId(userId)

                }
            },
            {
                $lookup:{
                    from:"usersposts",
                    localField:"following",
                    foreignField:"userId",
                    as:"followingPosts"

                }
            },
            {
                $project:{
                    followingPosts:1
                }

            }

        ]);
        res.status(200).json(currentUserPosts.concat(...followingUserPost[0].followingPosts)
        .sort((a,b)=>
         {
            return b.createdAt-a.createdAt
         }
   ))
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}