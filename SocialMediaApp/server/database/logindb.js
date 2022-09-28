
import mongoose from 'mongoose';

const url = "mongodb+srv://Nikita:Nikita2194@atlascluster.segg7kg.mongodb.net/social_media?retryWrites=true&w=majority";




export const mongooseUrl=async function (){
    return await mongoose.connect(url);
}
