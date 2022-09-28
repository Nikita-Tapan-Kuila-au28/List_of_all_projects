import mongoose from "mongoose";

const UserSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true

        },
        email_id:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true

        },
        profile_picture:{
            type:String
        },
        cover_picture:{
            type:String
        },
        about:{type:String},
        livesin:{type:String},
        worksAt:{type:String},
        relationshipStatus:{type:String},
        hobbies:{type:String},
        followers:[],
        following:[],
        videos:[]
      


    },
    {timestamps:true}
)

const UserModel=mongoose.model("users",UserSchema);
export default UserModel