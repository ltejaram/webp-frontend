import react, { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Form(props)
{
   
    const [Title,setTitle]=useState("");
    const [content,setcontent]=useState("");
    function titlehandler(event)
    {
        let temp=event.target.value;
        setTitle(temp);
    }
    function contenthandrle(event)
    {
        let temp=event.target.value;
        setcontent(temp);
    }
    function clickhandler()
    {
        let temp={
            title:Title,
            content:content
        }
        setTitle("");
        setcontent("");
        props.clicked(temp);
        
    }
    return <div style={{display:"flex",justifyContent:"center", textAlign:"center",margin:"10px"}}> <div style={{backgroundColor:"white", width:"300px",padding:"10px", borderRadius:"10px" }}>
        <TextField value={Title} name="title" onChange={titlehandler} id="outlined-basic" label="Title" variant="outlined" />
        <div></div>
        <br></br>
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={6}
          cols={6}
          value={content} onChange={contenthandrle}
        />
        <div></div>
        <Button variant="contained" onClick={clickhandler}>Submit</Button>

    </div></div>
}
export default Form;

//<input value={Title} name="title" onChange={titlehandler} style={{display:"block",position:"relative",left:"500px"}}></input>
//style={{textAlign:"center",display:"block",backgroundColor:"white", width:"300px",position:"fixed", left: "35%"}}