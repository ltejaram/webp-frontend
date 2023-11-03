import React, { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup()
{
    const navigate=useNavigate();
    const [form,setForm]=useState({email:"",password:"",name:"",phone:"",});
    const [err,setErr]=useState("");
    function handleChange(e){
        const {name,value}=e.target;
        setForm({...form,[name]:value});
    }
    function handleSignup()
    {
        let regx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(regx.test(form.email) && form.password.length>=4 && form.phone.length==10 && form.name!="")
        {
            axios.post("http://localhost:4000/register",form).then((res)=>{
                if(res.data=="success")
                    navigate("/login");
                else    
                    setErr("User already exist");
            })
        }
        else    
            setErr("invalid data");
    }
    return <div style={{display:"flex",justifyContent:"center", textAlign:"center",margin:"10px"}}>
         <div style={{backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px" }}>
         <TextField  style={{margin:"5px"}} name="name" label="Name" variant="outlined" onChange={handleChange} />
        <br></br>
        <TextField  style={{margin:"5px"}} name="phone" label="Phone" variant="outlined"onChange={handleChange} />
        <br></br>
        
        <TextField  style={{margin:"5px"}} name="email" label="Email" variant="outlined"onChange={handleChange} />
        <br></br>
        <TextField   label="Password" name="password" variant="outlined"onChange={handleChange} />
        <br></br>
        
        <Button variant="contained" style={{margin:"5px"}} onClick={handleSignup}>Signup</Button>
        <h3 style={{color:"red"}}>{err}</h3>
    </div>
    </div>
}
export default Signup;

