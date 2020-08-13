import React from 'react'
import OptionHeader from '../OptionHeader/OptionHeader'
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import ManageExisting from '../ManageExisting/ManageExisting';
 
const useStyles = makeStyles(theme => ({
    root: {
        padding: '6rem 0',
        background: '#f4f4f4'
    },
    main: {
        background: '#fff',
        padding: '2rem'
    },
    warper: {
        border: '2px solid #000',
        marginBottom: '2rem'
    },
    text: {
        background: '#000',
        color: '#fff',
        fontWeight: 'bold',
        padding: '1rem 0'
    },
    left: {
        padding: '1rem'
    },
    select: {
        width: '80%',
        border: '1px solid #aaa',
        padding: '0.5rem',
        background: '#f4f4f4',
        margin: '1rem 0'

    },
    i: {
        display: 'inline-block',
        margin: '0 0.5rem',
        fontSize: '1rem',
        padding: '0.5rem',
        borderRadius: '50%',
        background: 'var(--primary)',
        cursor: 'pointer'
    },
    subText: {
        fontWeight: 'bold'
    },
    btn: {
        display: 'block',
        boxShadow: 'none',
        width: '6rem',
        margin: '1rem 0',
        color: '#333',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    right: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        '& > *:last-child': {
            alignSelf: 'flex-end',
            marginRight: '2rem',
            [theme.breakpoints.down('xs')]: {
                marginRight: '1rem',

            }
        }
    },
    box: {
        background: '#f9f9f9',
        border: '2px dashed #000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '11rem',
        padding: '1rem',
        '& > *:last-child': {
            color: '#777',
            fontSize: '12px',
            margin: '1rem 0',
        }
    },
    btn1: {
        display: 'block',
        boxShadow: 'none',
        width: '6rem',
        margin: '1rem 0',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
}))

const Option5 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <OptionHeader number="5" text=" - Upload New" />
            <Container className={classes.main}>
                <div className={classes.warper}>
                    <div><Typography className={classes.text} variant="subtitle1" align="center">DETAILS</Typography></div>
                    <Grid container>
                        <Grid item xs={12} md={4} className={classes.left}>
                            <Typography className={classes.subText} variant="subtitle2">Select A Category</Typography>
                            <select className={classes.select}>
                                <option value="select">--Select--</option>
                            </select>
                            <i className={["fas fa-plus", classes.i].join(' ')}></i>
                            <Typography className={classes.subText} variant="subtitle2">Name</Typography>
                            <input className={classes.select} type="text" placeholder="Enter name here" />
                            <Button className={classes.btn} variant="contained">Reset</Button>
                        </Grid>
                        <Grid item xs={12} md={8} className={classes.right}>
                            <div className={classes.box}>
                                <Typography variant="h6">Drag and Drop File Here</Typography>
                                <Typography variant="subtitle2">Acceptable File Formats txt & csv</Typography>
                            </div>
                            <Button variant="contained" className={classes.btn1} color="secondary">Done</Button>
                        </Grid>
                    </Grid>
                </div>
                <ManageExisting />
            </Container>
        </div>
    );
};

export default Option5;
