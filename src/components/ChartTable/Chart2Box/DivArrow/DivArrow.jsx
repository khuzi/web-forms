import React from 'react'

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    arrow: {
        position: 'relative',
        height: '4rem',
        width: '4rem',
        textAlign: 'center',
        padding: '0.3rem 1rem 0 1rem',
    },
    up: {
        position: 'absolute',
        bottom: 0,
        background: 'green',
        color: '#fff',
        left: '20%'

    },
    down: {
        position: 'absolute',
        top: 0,
        background: 'red',
        color: '#fff',
        right: '30%'
    },
    triUp: {
        position: 'absolute',
        width: '0',
        height: '0',
        borderLeft: '32px solid transparent',
        borderRight: '32px solid transparent',
        borderBottom: '25px solid green',
        top: '-38%',
        left: '0%'
    },
    triDown: {
        position: 'absolute',
        width: '0',
        height: '0',
        borderLeft: '32px solid transparent',
        borderRight: '32px solid transparent',
        borderTop: '25px solid red',
        bottom: '-38%',
        left: '0%'
    },
    arrTxtUp: {
        color: 'black',
        marginTop: '-1.2rem',
        marginLeft: '-1.5rem'
    },
    arrTxtDown: {
        color: 'black',
        marginLeft: '-1.5rem'
    }
})

let arrElement = null;
let arrDirection = null;
let arrText = null;
const DivArrow = (props) => {
    const classes = useStyles();
    switch (props.direction) {
        case 'up':
            arrElement = [classes.arrow, classes.up].join(' ');
            arrDirection = classes.triUp;
            arrText = classes.arrTxtUp;
            break;
        default:
            arrElement = [classes.arrow, classes.down].join(' ');
            arrDirection = classes.triDown;
            arrText = classes.arrTxtDown;
            break;
    }
    return (
        <>
            <div className={arrElement}>
                <h5>313 D</h5>
                <h5>12 H</h5>
                <h5>0 M</h5>
                <div className={arrDirection}>
                    <div className={arrText}><h4>2334.92</h4></div>
                </div>

            </div>
        </>
    );
};

export default DivArrow;
