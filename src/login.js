import React, { useEffect, useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login()
{
    const navigate=useNavigate();
    const [form,setForm]=useState({email:"",password:""});
    const [err,setErr]=useState("");
    useEffect(()=>{
        if(localStorage.getItem('auth')=="true")
        navigate('/',{replace:true});
    },[])
    function loginHandler()
    {
        axios.post("http://localhost:4000/login",form).then((res)=>{
            console.log(res.data);
            if(res.data=="success")
            {
                localStorage.setItem("auth","true");
                navigate('/',{replace:true})
            }
            else
                setErr("Invalid details")
        })
        
            
    }
    function handleChange(e){
        const {name,value}=e.target;
        setForm({...form,[name]:value});
    }
    return <div style={{display:"flex",justifyContent:"center", textAlign:"center",margin:"10px"}}> <div style={{backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px" }}>
        <TextField  style={{margin:"5px"}} name="email" label="Email" variant="outlined" onChange={handleChange}/>
        <br></br>
        <br></br>
        <TextField name="password" type="password" label="Password" variant="outlined" onChange={handleChange}/>
        <br></br>
        
        <Button variant="contained" style={{margin:"5px"}} onClick={()=>{navigate('/signup')}}>Signup</Button>
        <Button variant="contained" onClick={loginHandler}>Login</Button>
        <h3 style={{color:"red"}}>{err}</h3>
    </div></div>
}
export default Login;

