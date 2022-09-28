import mongoose from "mongoose";

const postSchema=mongoose.Schema(
    {
       userId:{type:String,required:true},
       caption:String,
       likes:[],
       images:String,
       videos:[]

    },{
        timestamps:true    }
);

const postModel=mongoose.model("usersposts",postSchema);
export default postModel