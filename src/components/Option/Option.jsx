import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        border: `1.4px solid #959595`,
        width: '9.5rem',
        padding: '1.5rem 0',
        cursor: 'pointer',
        textDecoration: 'none',
        height: '12rem',
        boxShadow: 'none',
        backgroundImage: 'linear-gradient(#f9f9f9, #fff)',
        [theme.breakpoints.down('md')]: {
            margin: '0.5rem 0.5rem',
            width: '8rem',
            height: '11rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0.5rem 0',
            height: '9rem',
            width: '7rem',
            marginBottom: '1rem'
        }
    },
    text: props => {
        return {
            color: '#000',
            fontWeight: 'bold',
            margin: '1rem 0',
            fontSize: props.fSize,
            [theme.breakpoints.down('xs')]: {
                fontSize: '12px'
            }
        }

    },
    i: {
        width: '50%',
        height: '60%',
        display: 'block',
        margin: 'auto'
    }
}));


const Option = (props) => {
    const classes = useStyles(props);
    return (
        <Grid item md={2}>
            <Paper className={classes.root} onClick={props.clicked}>
                <img src={props.url} alt="" className={classes.i} />
                <Typography className={classes.text} variant="h6">{props.text}<br />{props.subText}</Typography>
            </Paper>
        </Grid>
    );
};

export default Option;

