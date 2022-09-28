import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {signUp,logIn} from "../actionCreaters/authActionCreaters"
import "./Login.css";
const Login = () => {
    const dispatch=useDispatch();
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState({ firstName: "", 
    lastName: "", 
    userName: "", 
    password: "", 
    confirmpass: "" });
    const [confirmpass, setConfirmpass] = useState(true)

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


const handleSubmit=(e)=>{
e.preventDefault();
if(isSignUp){
  data.password===data.confirmpass?dispatch(signUp(data)):setConfirmpass(false)
}
else{
    dispatch(logIn(data))
}
}

const onReset=()=>{
    setConfirmpass(true);
    setData({ firstName: "", 
    lastName: "", 
    userName: "", 
    password: "", 
    confirmpass: "" })
}

    return (

        <div className="containers">
            <div className="login">


                <div className='form' >
                    <form onSubmit={handleSubmit}>
                        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>



                        {isSignUp && (
                            <div style={{ width: "600px" }}>
                                <div className="input">
                                    <div className="inputbox">

                                        <input type="text" required="required" name="firstName" onChange={handleData} value={data.firstName}/>
                                        <span>First Name</span>
                                        <i></i>
                                    </div>
                                    <div className="inputbox">

                                        <input type="text" required="required" name="lastName" onChange={handleData} value={data.lastName}/>
                                        <span>Last Name</span>
                                        <i></i>
                                    </div>
                                </div>



                            </div>
                        )

                        }
                        <div>
                            <div className="inputbox">

                                <input type="text" required="required" name="userName" onChange={handleData} value={data.userName}/>
                                <span>Username</span>
                                <i></i>
                            </div>
                            <div className="inputpassword">
                                <div className='inputbox'>

                                    <input type="password" required="required" name="password" onChange={handleData} value={data.password} />
                                    <span>Password</span>
                                    <i></i>
                                </div>
                                {isSignUp && (


                                    <div className="inputbox">

                                        <input type="password" required="required" name="confirmpass" onChange={handleData} value={data.confirmpass}/>
                                        <span >Confirm password</span>
                                        <i></i>
                                    </div>
                                )}
                                <span style={{ display: confirmpass ? "none" : "block", color: "red", position: "absolute", bottom: "95px", fontSize: "0.75rem", alignSelf: "flex-end", marginRight: "15px" }}>*Passwords does not match</span>

                            </div>
                            <div className="links">

                                <links onClick={() => {setIsSignUp((prev) => !prev);onReset()}} >{isSignUp ? "Login" : "Sign Up"}</links>
                            </div>
                            <div>
                                <button className='button loginbtn' type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
                            </div>
                        </div>



                    </form>
                </div>


            </div>
        </div>

    )
}

export default Login