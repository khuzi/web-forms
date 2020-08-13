import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem 2rem',
        borderTop: '1px solid',
        borderColor: theme.palette.faIcons,
        marginTop: '2rem',
        marginBottom: '2rem',
        width: '98%',
        margin: 'auto',
        fontSize: '18px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            padding: '1rem'
        },
    },
    p: {
        textAlign: "left",
        color: theme.palette.faIcons
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    li: {
        color: theme.palette.faIcons,
        padding: '0 1rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0 0.3rem'
        },
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <p className={classes.p}>Terms & Conditions</p>
                </Grid>
                <Grid item xs={6}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>All Services</li>
                        <li className={classes.li} style={{ borderLeft: '1px solid' }}>Policy</li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
