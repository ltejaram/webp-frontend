import react, { useState } from "react"
import Form from "./form"
import AppBar from '@mui/material/AppBar';
import Note from "./note";

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
                let k=0;
              return  prev.filter(x =>
                    {
                        if(k==1)
                            return x;
                        if(x.title!=Title || x.content!=Content)
                            return x;
                        else
                            k=1;
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