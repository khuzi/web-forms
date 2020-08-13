import React from 'react'

import { makeStyles , Typography } from '@material-ui/core';
import DivArrow from './DivArrow/DivArrow';

const useStyles = makeStyles({
    warper: {
        height: '15rem',
        width: '12rem',
        display: 'flex',
        flexDirection: 'column'
    },
    box1: {
        flex: 1,
        borderBottom: '1px solid #aaa',
        position: 'relative'
    },
    box2: {
        position: 'relative',
        flex: 1
    }
})

const Chart2Box = () => {
    const classes = useStyles();
    return (
        <div className={classes.warper}>
            <div className={classes.box1}>
                <DivArrow direction="up"/>
            </div>
            <div className={classes.box2}>
                <DivArrow direction="down"/>
            </div>
        </div>
    );
};

export default Chart2Box;

