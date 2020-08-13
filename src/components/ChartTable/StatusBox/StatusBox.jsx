import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    stBox: props => {
        return {
            background: props.gr ? 'green' : 'var(--primary)',
            height: '15rem',
            width: '8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '1rem',
        }
    },
    txt1: props => {
        return {
            color: props.gr ? '#f4f4f4' : '#000',
            padding: '1rem 0',
            fontWeight: 'bold'
        }
    },
    txt2: props => {
        return {
            color: props.gr ? '#fff' : '#000',
            padding: '1rem 0',
        }
    },
    redBox: {
        background: 'red',
        color: '#f4f4f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        height: '15rem',
        width: '8rem',
    }
}))

let box = null;
const StatusBox = (props) => {
    const classes = useStyles(props);
    switch (props.element) {
        case 'default':
            box = <div className={classes.stBox}>
                <Typography variant="subtitle1" className={classes.txt1}>{props.end ? "Ending In" : "Starting In"}</Typography>
                <Typography variant="subtitle1" className={classes.txt2}>01D:17H:42M</Typography>
            </div>
            break;

        default:
            box = <div className={classes.redBox}>
                <Typography variant="subtitle1" style={{fontWeight: 'bold' , color: '#f4f4f4'}}>Ended</Typography>
            </div>
            break;
    }
    return (
        <>
            {box}
        </>

    );
};

export default StatusBox;
