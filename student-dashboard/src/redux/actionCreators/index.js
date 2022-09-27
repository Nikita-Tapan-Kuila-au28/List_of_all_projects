import {REGISTER} from "../actionTypes";

export const register=(firstName,lastName,email,password)=>{
   console.log(firstName,lastName,email,password)
    return{
        type:REGISTER,
        payload:{
            firstName,lastName,email,password
           
        }
            
       
    }
}
