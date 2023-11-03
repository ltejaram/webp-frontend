import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
  
  //let auth = {'token':false}
  const [auth,setAuth]=useState(localStorage.getItem('auth'));
  useEffect(()=>{
    console.log(localStorage.getItem("auth"));
    setAuth(localStorage.getItem("auth"))
  },[])
  if(auth=="true")
  {
    return <Outlet></Outlet>
  }
  else  
    return <Navigate to="/login"/>
}
export default PrivateRoutes