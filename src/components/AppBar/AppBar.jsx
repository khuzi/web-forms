import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    contentWarper: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        left: '9%',
        justifyContent: 'space-around',
        width: '90%',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
        },
    },
    menuButton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        background: theme.palette.faIcons,
        padding: '0.5rem',
    },
    menuIcon: {
        fontSize: '1.5rem',
    },
    p: {
        display: 'inline-block',
        color: '#fff',
        fontSize: '16px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
        paddingLeft: '1rem',
        textAlign: 'center'
    },
    icons: {
        color: theme.palette.faIcons,
        display: 'flex',
        paddingRight: '0.5rem'
    },
    toolbar: {
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
    },
    lastContent: {
        color: theme.palette.faIcons
    },
    triDown: {
        position: 'absolute',
        width: '0',
        height: '0',
        borderLeft: '14px solid transparent',
        borderRight: '14px solid transparent',
        borderTop: '12px solid black',
        bottom: '-55%',
        left: '15%',
        zIndex: 1,
    },
}));

export default function DenseAppBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary" className={classes.appBar}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu" onClick={props.clicked}>
                        <MenuIcon className={classes.menuIcon} />
                        <div className={[classes.triDown , 'arrow'].join(' ')}></div>
                    </IconButton>
                    <div className={classes.contentWarper}>
                        <div>
                            <Typography className={classes.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et...</Typography>
                            <Typography className={classes.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et...</Typography>
                        </div>
                        <div className={classes.icons}>
                            <EmailIcon style={{ fontSize: 40 }} />
                            <PersonIcon style={{ fontSize: 40 }} />
                            <div style={{ margin: 0, textAlign: 'center' }}>
                                <Typography variant="h6">Welcome</Typography>
                                <Typography className={classes.lastContent} style={{ fontSize: '0.6rem' }}>Peter Parker</Typography>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
