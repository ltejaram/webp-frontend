import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function Info2({route,Navigation})
{
    const location=useLocation();
    const navigate=useNavigate();
    console.log("state is", location.state);
    function moreInfo1(x)
    {
        navigate('/info1',{state:x});
    }
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        axios.post("http://localhost:4000/search-by-location",
        {from:location.state.from,to:location.state.to})
        .then((res)=>{
          console.log("data is ",res.data);
          if( res.data.length==0)
          {
            navigate('/nodata',{replace:true});
          }
          else
          setArr(res.data);
        })
      },[])
   
    return <div style={{display:"inline-flex" ,margin:"10px"}}>
       { arr.map((bus)=>{
            return <div style={{display:"inline-block",backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px", margin:"30px"}}>
        <h2>Service Number: {bus.bus_id}</h2>
        <hr></hr>
        <table style={{width:"100%"}}>
            <tr>
                <td>{bus.from_location}</td>
                <td></td>
                <td>{bus.start_time}</td>
            </tr>
            <tr>
                <td>{bus.to_location}</td>
                <td></td>
                <td>{bus.end_time}</td>
            </tr>
        </table>
        <Button variant="contained" onClick={()=>{moreInfo1(bus.bus_id)}}>More Info</Button>

    </div>
    })}
    </div>
}
export default Info2;

