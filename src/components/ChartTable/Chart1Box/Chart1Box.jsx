import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    warper: {
        height: '15rem',
        width: '14rem',
        display: 'flex',
        flexDirection: 'column',
        '& .arrow': {
            position: 'absolute',
            zIndex: '1',
            background: 'lightgreen',
            fontSize: '1rem',
            color: 'green',
            borderRadius: '50%',
            padding: '0.5rem',
            top: '50%',
            left: '58%',
            border: '2.5px solid #fff',
            transform: 'translateY(-50%)'
        }
    },
    box1: {
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        margin: '0.1rem',
    },
    box2: {
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        margin: '0.1rem',
        '& .redArrow': {
            background: 'coral',
            color: 'red',
        }
    },
    sub1Box1: {
        flexGrow: '2',
        background: 'green',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub2Box1: {
        flexGrow: '1',
        background: '#fff',
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: '0.2rem',
        '& :first-child': {
            marginTop: '62%'
        }
    },
    sub1Box2: {
        flexGrow: '2',
        background: 'red',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sub2Box2: {
        flexGrow: '1',
        background: '#fff',
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: '0.2rem',
        '& :first-child': {
            marginTop: '62%'
        }
    },
});

const Chart1Box = () => {
    const classes = useStyles();
    return (
        <div className={classes.warper}>
            <div className={classes.box1}>
                <div className={classes.sub1Box1}>
                    <Typography variant="subtitle1" align="center">01D:17H:42M</Typography>
                </div>
                <i className="fas fa-arrow-up arrow"></i>
                <div className={classes.sub2Box1}>
                    <h4>3123.92</h4>
                </div>
            </div>
            <div className={classes.box2}>
                <div className={classes.sub1Box2}>
                    <Typography variant="subtitle1" align="center">01D:17H42M</Typography>
                </div>
                <i className="fas fa-arrow-down redArrow arrow"></i>
                <div className={classes.sub2Box2}>
                    <h4>2342.92</h4>
                </div>
            </div>
        </div>
    );
};

export default Chart1Box;
