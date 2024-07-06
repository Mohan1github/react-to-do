import React from"react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from "react"
const Register =()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")
    const navigate = useNavigate()
    const register=()=>{
        axios.post("http://localhost:5000/user/register",{name,email,password,confirmpassword}).then(res=>{
            console.log(res).catch(err=>{
                console.log("error:",err)
            })
        })
     navigate("/")
    }
    return(
        <>
         <div className="loginform">
                <div className="header">Register</div>
                <div className="inputdiv">
                    <input type="name" name = "name" onChange={(e)=>setName(e.target.value)}></input>
                    <input type="email" name = "email" onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <input type="password" name = "conformpassword" onChange={(e)=>setConfirmpassword(e.target.value)}></input>
                </div>
                <div className="login-btn">
                    <button type="submit" onClick={register}>SignUp</button>
                </div>
            </div>
        </>
    )
        

}
export default Register;