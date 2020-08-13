import React from 'react'

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    warper: {
        height: '15rem',
        width: '8rem',
        display: 'flex',
        flexDirection: 'column',
    },
    box1: props => {
        return {
            background: props.grDetal ? 'green' : 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            height: '50%'
        }
    },
    box2: {
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontWeight: 'bold',
        height: '50%'
    },

});
const DetalBox = (props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.warper}>
            <div className={classes.box1}>
                <Typography variant="subtitle1">44.01</Typography>
            </div>
            <div className={classes.box2}>
                <Typography  variant="subtitle1">11:59 AM</Typography>
                <Typography  variant="subtitle1">25/05/2020</Typography>
            </div>
        </div>
    );
};

export default DetalBox;
