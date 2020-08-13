import React from 'react'
import { Typography, Grid , Checkbox} from '@material-ui/core';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { makeStyles } from '@material-ui/core/styles';

import img from '../../../assets/images/4.png';

const useStyles = makeStyles((theme) => ({
    checkBox: props => {
        return {
            color: props.checked ? 'green' : '#aaa',
            fontSize: '2rem',
        }
    },
    img: {
        width: '4rem',
        background: '#f4f4f4',
        padding: '0.3rem'
    }
}));

const Manage = (props) => {
    const classes = useStyles(props);
    return (
        <Grid item xs={12} sm={5} className="create">
                <div className="text-info">
                    <Checkbox 
                        checked={props.checked}
                        icon={<CircleUnchecked />} 
                        checkedIcon={
                            <CircleCheckedFilled 
                            className={classes.checkBox}/>}
                            onClick={props.clicked}/>
                    <Typography variant="h6">{props.text}</Typography>
                </div>
                <div className="img-info">
                   <img src={img} alt="" className={classes.img}/>
                </div>
            </Grid>
    );
};

export default Manage;
