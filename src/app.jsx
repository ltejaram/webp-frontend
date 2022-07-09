import react, { useState } from "react"
import dom from "react-dom"
import Typography from '@mui/material/Typography';
import Form from "./form"
import AppBar from '@mui/material/AppBar';
import Note from "./note";
import { width } from "@mui/system";
var arr1=[{
    title:"",
    content:""
}];
function App()
{
    const [arr,setarr]=useState(arr1)
    function clicked(x)
    {
        setarr(prev =>
            {
                return [...prev,x];
            })
        console.log(arr);
    }
    function deletenote(Title,Content)
    {
        setarr( prev =>
            {
              return  prev.filter(x =>
                    {
                        if(x.title!=Title || x.content!=Content)
                            return x;
                    })
                
            })
    }
    return  <div style={{marginBottom:"10px"}}> <AppBar position="static" style={{backgroundColor:"orange"}}>
       <h2 >Keeper App</h2>
    </AppBar> 
    <Form clicked={clicked}></Form>
    <div>
    {arr.map(x =>
    {
        if(x.title!=="" && x.content!=="")
            return (<Note title={x.title} content={x.content} deletenote={deletenote}></Note>);
    })}</div>
    </div>
}
export default App;