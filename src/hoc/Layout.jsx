import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import AppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const useStyles = makeStyles(theme => ({
    content: {
        transition: 'margin 0.5s ease-in',
    },
    move: {
        marginTop: '-14%',
        [theme.breakpoints.down('lg')]: {
            marginTop: '-16%'
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '-19%'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '-42%',
        }
    },
    notMove: {
        marginTop: '0'
    },
}));


const Layout = (props) => {
    const [drawer, setDrawer] = useState(true);
    const classes = useStyles();
    let attachedClasses = [classes.content, classes.notMove].join(' ');
    if (!drawer) {
        attachedClasses = [classes.content, classes.move].join(' ')
    }
    return (
        <React.Fragment>
            <AppBar clicked={() => setDrawer(prevState => !prevState)} />
            <NavBar open={drawer} />
            <div className={attachedClasses}>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
