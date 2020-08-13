import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input:{
      width:'100%',
      border:'1px solid',
      padding: '1px'
    }
  }));
const textBox = (props) =>{
    // const classes = useStyles();
    return(
        <Input placeholder={props.placeholder} style={{ width:'100%',border:'1px solid',padding: '1px'}} 
        inputProps={{ 'aria-label': 'description' }} 
        />
    )
};
export default textBox;