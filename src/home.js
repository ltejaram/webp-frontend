import React, { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios  from "axios";


function Home()
{
    const navigate=useNavigate();
    const [formData, setFormData] = useState({ from: '', to: '',serviceId:0 });
    
    function handleChange1(e)
    {
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
        //console.log(formData);
    }
    function searchByLocation()
    {
        console.log(formData.from+" "+formData.to);
        navigate('/info2',{state:formData});
       
    }
    function searchByServiceId()
    {
        console.log(formData.serviceId);
        navigate('/info1',{state:formData.serviceId});
    }
    return <div style={{margin:"10px"}}>
        <center> <div style={{backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px" }}> 
       
        <TextField style={{margin:"5px"}} value={formData.from} name="from" label="From" variant="outlined" onChange={handleChange1}/>
        <br></br>
        <TextField name="to" label="To" value={formData.to} variant="outlined" onChange={handleChange1}/>
        <br></br>
        <br></br>
        
        <Button variant="contained" onClick={searchByLocation} >Search</Button>
    </div>
    <br></br>
    <div style={{backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px" }}>
        <TextField style={{margin:"5px"}} type="number" name="serviceId" onChange={handleChange1} label="Service Number" variant="outlined" />
        <br></br>
        
        <Button variant="contained" onClick={searchByServiceId} >Search</Button>
    </div></center>
    
    </div>

    
}
export default Home;

