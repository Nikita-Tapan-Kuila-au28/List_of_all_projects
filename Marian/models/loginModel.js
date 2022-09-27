const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    hashPassword:{
        type:String,
        required:true

    }

})

const loginModel=mongoose.model('users',userSchema);
module.exports=loginModel;