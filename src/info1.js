
import axios  from "axios";
import React, { useEffect, useState } from "react"
import {  useLocation, useNavigate } from "react-router-dom";
import { sql_uri } from "./app";
function Info1()
{
        const location=useLocation();
        const navigate=useNavigate();
        console.log("teja "+location.state);
        const [data,setData]=useState({bus:[],driver:{},phone:[]});
        useEffect(()=>{
          axios.post("https://webp-backend.onrender.com/more-info",
          {bus_id:location.state})
          .then((res)=>{
            console.log(res);
            if(res.data=="error")
            {
                navigate('/nodata',{replace:true});
            }
            else{
            console.log("abcde ",res.data);
            setData(res.data);
            }
          })
        },[])
        return <div style={{margin:"10px"}}>
        <div style={{backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px",margin:"auto"}}>
        <center> <h2>Service Number: {location.state}</h2></center>
        <hr></hr>
        <table style={{width:"100%"}}>
             {data.bus.map((x)=>{
            return <tr>
                <td >{x.location}</td>
                <td></td>
                <td>{x.time1}</td>
            </tr>}
            )
            
        } 
        </table>
        <h4>Driver Details:</h4>
        <p>id: {data.driver.driver_id}</p>
        <p>name: {data.driver.name}</p>
        <p>phone: </p>
        { 
            data.phone.map((x)=>{
                return <p>{x.phone}</p>
            })
        } 
    </div>
    </div>
}
export default Info1;

