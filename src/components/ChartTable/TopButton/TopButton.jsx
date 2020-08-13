import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        background: '#fff',
        border: '1px solid #888',
        borderRadius: '5px',
        color: '#888',
        width: '9rem',
        textTransform: 'capitalize'
    },
    img: {
        width: '40%',
        height: '20%',
    },
    active: {
        '& > *:first-child': {
            background: 'var(--primary)',
        },
    },
    a: {
        textDecoration: 'none'
    }
});

let element = null;
const TopButton = (props) => {
    const classes = useStyles();
    switch (props.typeElement) {
        case 'simple':
            element = <Button variant="outlined" style={{padding:'0.7rem' , border: '2px solid #888'}}>
                <Typography style={{ textTransform: 'capitalize' }}
                    variant="subtitle1">{props.text}</Typography>
            </Button>
            break;
        default:

            element = <div className={classes.root}>
                <NavLink exact={props.exact} to={props.link} className={classes.a} activeClassName={classes.active}>
                    <Button variant="outlined">
                        <img className={classes.img} src={props.pic} alt="" />
                        <Typography style={{ textTransform: 'capitalize', marginLeft: '10px' }}
                            variant="subtitle1">{props.text}</Typography>
                    </Button>
                </NavLink>
            </div>
            break;
    }
    return (
        <>
            {element}
        </>
    );
};

export default TopButton;
