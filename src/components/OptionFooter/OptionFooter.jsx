import React from 'react'
import { Button , TextField , makeStyles, Grid} from '@material-ui/core';

const useStyles =  makeStyles((theme)=>({
    root: {
        padding: '1rem 0.5rem',
        background: '#fff'
    },
    btn1: {
        margin: '1rem'
    },
    btn2: {
        padding: '0.5rem',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        '& .arrow': {
            color: '#fff',
            background: '#000',
            padding: '0.2rem 0.5rem',
        },
        '& .arrow i': {
            fontSize: '1rem',
            transform: 'rotate(-50deg)'
        }
    },
    textBox: {
        padding: '1rem',
        width: '100%'
    }
}));

const OptionFooter = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" className={classes.root}>
            <Grid item container alignItems="center" justify="space-around">
                <Grid className={classes.btn1}>
                    <Button variant="contained">Reset</Button>
                </Grid>
                <Grid xs={12} md={8}>
                    <TextField variant="outlined" className={classes.textBox} placeholder="Enter A Name to Save Results"/>
                </Grid>
                <Grid className={classes.btn1}>
                    <Button color="secondary" variant="contained">Generate</Button>
                </Grid>
            </Grid>
            <Grid item container justify="center">
                <Button className={classes.btn2} variant="contained" color="primary">form by test editor&nbsp;&nbsp;<div className="arrow"><i className="fas fa-arrow-right"></i></div></Button>
            </Grid>
        </Grid>
    );
};

export default OptionFooter;
