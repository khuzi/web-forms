import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputPopup from '../Input/InputPopup';
import ClearIcon from '@material-ui/icons/Clear';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const MainPopup = (props)=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); 
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  
  
  return (
    <React.Fragment>
      <div variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.children}
      </div>
      <Dialog
        fullWidth='false'
        maxWidth='xs'
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle style={{backgroundColor:'#000', color:'#fff'}} id="max-width-dialog-title">{props.heading}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div style={{margin:'3px',height:'12rem',overflow:'auto'}}>
            {props.type.map(data=>{
              if(data.type ==='label')
              {return(
                <div>
                <InputPopup type={data.type} color={data.color} placeholder={data.placeholder} buttonName={data.buttonName} width={data.width} span={data.span} label={data.label}/>
                </div>
              )}
            })}          
          </div>
          <div style={{margin:'3px'}}>
            {props.type.map(data=>{
              if(data.type !=='label')
              {return(
                <InputPopup type={data.type}  checklist={data.checklist} placeholder={data.placeholder} buttonName={data.buttonName} width={data.width} span={data.span} label={data.label}/>
              )}
            })}          
          </div>                   
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{justifyContent:'space-evenly'}}>
          <Button onClick={handleClose} color="primary">
            {props.button1}
          </Button>
          <Button onClick={handleClose} color="primary">
            {props.button2}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default MainPopup;
