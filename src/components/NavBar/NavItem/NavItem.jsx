import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    a: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1rem',
        cursor: 'pointer',
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]: {
            padding: '1rem 0.5rem',
            margin: '0 0.1rem'
        },
        marginBottom: '-0.2rem'
    },
    text: {
        color: theme.palette.faIcons,
        fontSize: '20px',
        paddingBottom: '1.5rem',
        textAlign: 'center',
        fontWeight: 'bold',
        transition: 'all 0.2s ease',
        '&:hover': {
            color: '#000'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        }
    },
    active: {
        borderBottom: '0.3rem solid #000',
        '& .activeLink': {
            color: '#000',
            fontWeight: 'bold'
        }
    },
    i: {
        width: '3rem',
        marginBottom: '1rem',
        padding: '0.3rem',
        background: '#fbfd8a',
        borderRadius: '50%',
        alignSelf: 'center',
        display: 'block',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '2rem'
        }
    },
}))

const NavItem = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item sm={2}>
                <NavLink exact={props.exact} activeClassName={classes.active} className={classes.a} to={props.link}>
                    <img src={props.imgClass} alt="" className={classes.i}/>
                    <Typography className={[classes.text, 'activeLink'].join(' ')} variant="h5">{props.text1}<br />{props.text2}</Typography>
                </NavLink>
            </Grid>
        </>
    );
};

export default NavItem;
