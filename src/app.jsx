import React, { useEffect } from "react"
import Login from "./login";
import Home from "./home";
import Info1 from "./info1";
import Info2 from "./info2";
import Signup from "./signup";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes, Route, useLocation, useNavigate,Navigate } from 'react-router-dom';
import PrivateRoutes from "./privateRoutes";
import NoData from "./noData";


function App()
{
  const location=useLocation();
  const navigate=useNavigate();
    function logoutHandler()
    {
      localStorage.setItem('auth',"false");

      navigate('/login',{replace:true});
    }
    return ( <div >
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"orange"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bus Station Management System
          </Typography>
          {location.pathname!="/login"?<Button color="inherit" onClick={logoutHandler}>Log Out</Button>:<></>}
          </Toolbar>
      </AppBar>
    </Box>
        
    <>
       <Routes>
       <Route element={ <PrivateRoutes/> } >
          <Route path="/" element={<Home />} />
          <Route path="/info1" element={<Info1 />} />
          <Route path="/info2" element={<Info2 />} />
          <Route path="/nodata" element={ <NoData/> }/>
         
          </Route>
           <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          
       </Routes>
    </>
    
    </div> )
}
export default App;