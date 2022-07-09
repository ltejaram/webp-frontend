import react from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props)
{
   return <div style={{display:"inline-flex",margin:"30px"}}> <Card sx={{minWidth:300, maxWidth:500 }} >
      <CardContent>
        <Typography variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="h6" component="div">
        {props.content}
        </Typography>
        
        </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>
        {
            props.deletenote(props.title,props.content);
        }}> <DeleteIcon></DeleteIcon> </Button>
      </CardActions>
    </Card> </div>
}
export default Note;