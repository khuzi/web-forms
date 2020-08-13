import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import NavItem from './NavItem/NavItem';

import img1 from '../../assets/images/7.png';
import img2 from '../../assets/images/8.png';
import img3 from '../../assets/images/9.png';
import img4 from '../../assets/images/10.png';
import img5 from '../../assets/images/11.png';


const useStyles = makeStyles({
    root: {
        transition: 'transform 0.5s ease-in'
    },
    open: {
        transform: 'translateY(0)'
    },
    close: {
        transform: 'translateY(-200%)',
    }
})

const NavBar = (props) => {
    const classes = useStyles();
    let attachedClasses = [classes.root, classes.open].join(' ');
    if (!props.open) {
        attachedClasses = [classes.root, classes.close].join(' ');
    }
    const data = [
        { img: img1, text1: 'Manage', text2: 'Account', to: "/account" },
        { img: img2, text1: 'Manage', text2: 'Data', to: "/", exact: true },
        { img: img3, text1: 'Manage', text2: 'Templates', to: "/templates" },
        { img: img4, text1: 'Manage', text2: 'Results', to: "/results" },
        { img: img5, text1: 'Manage', text2: 'Alerts', to: "/alerts" }
    ];
    return (

        <Grid container justify="center" className={attachedClasses} component="main" alignItems="center" style={{ background: '#fff001' }}>
            {data.map((el, id) => <NavItem key={id} exact={el.exact} link={el.to} imgClass={el.img} text1={el.text1} text2={el.text2} />)}
        </Grid>

    );
};

export default NavBar;


