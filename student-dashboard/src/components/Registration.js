import React,{ useState,useDispatch } from "react"
import {register} from "../redux/actionCreators/index";


const Registration=()=>{
    const [ firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    const dispatch=useDispatch();
    

    return(
      <form className="register">
       <div> <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input> 
        <input type="text"  placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input> 
       </div>
       <div>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       </div>
       <div>
        <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
       </div>
       <button onClick={()=>dispatch(register())}>Submit</button>
       <br />
       
       Already have an account?login

      </form>

    )
    
    
}
export default Registration;