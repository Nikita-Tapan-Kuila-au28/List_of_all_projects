//import {SIGN_UP} from "../actionTypes/authAction";
import * as authApi from "../api/authRequestApi.js";

export const signUp=(formdata)=>
    async(dispatch)=>{

       dispatch({type:"AUTH_START"})
       try {
        const{data}=await authApi.signUp(formdata);
        dispatch({type:"AUTH_SUCCESS",data:data})
       } catch (error) {
        console.log(error);
        dispatch({type:"AUTH_FAIL"})
       }


    }

   


  
  export const logIn = ( formdata) => async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try {
        const{data} =await authApi.logIn(formdata);
        dispatch({type:"AUTH_SUCCESS",data}) 
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAIL"})
    }
  }
