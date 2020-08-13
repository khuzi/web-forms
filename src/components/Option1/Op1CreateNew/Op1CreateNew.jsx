import React from 'react'
import Side from '../../Side/Side';
import OptionFooter from '../../OptionFooter/OptionFooter';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import img from '../../../assets/images/4.png';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem 0',
        padding: '0.5rem',
    },
    text1: {
        fontWeight: 'bold',
        marginLeft: '0.5rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        }
    },
    text2: {
        color: theme.palette.danger,
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            padding: '0'
        }
    },
    text3: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            padding: '0'
        }
    },
    img: {
        width: '3rem',
        background: 'green',
        padding: '0.2rem',
        [theme.breakpoints.down('xs')]: {
            width: '2rem',
            padding: '0.1rem',
            marginLeft: '1rem'
        },
    }
}));

const Op1CreateNew = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center">
                <Grid container item sm={12} justify="center" direction="row" alignItems="center" className={classes.root} style={{ background: '#fff001' }}>
                    <Grid item xs={3}><Typography variant="h6" className={classes.text1}>List 2 Options</Typography></Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle2" align="center" className={classes.text3}>Select Item(s) from List 2</Typography>
                        <Typography variant="subtitle2" align="center" className={classes.text2}>0 Items selected</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={img} alt="" className={classes.img}></img>
                    </Grid>
                    <Grid container item xs={3} md={3} lg={2} direction="column" alignItems="center" className="box1">
                        <Typography variant="subtitle2">The box Contains for help details<br />when asking option</Typography>
                        <Typography variant="subtitle2">Enter text here... Enter Text here</Typography>
                        <Typography variant="subtitle2">Enter text here... Enter Text here</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Side side="Left Side" />
                <Side side="Right Side" />
            </Grid>
            <OptionFooter />
        </>
    );
};

export default Op1CreateNew;
