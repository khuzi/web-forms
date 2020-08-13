import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(4),
        },
    },
    input: {
        width: '3rem',
        padding: '0.5rem',
        borderRadius: '7px',
        marginRight: '1rem'
    }

}));

const TableFooter = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item xs={6} sm={4} container justify="center">
                <input className={classes.input} />
                <Typography variant="subtitle1">rows per page</Typography>
            </Grid>
            <Grid item xs={12} md={4} container justify="center">
                <Pagination count={10} color="secondary" />
            </Grid>
            <Grid item xs={6} sm={4} container justify="center">
                <input className={classes.input} />
                <Typography variant="subtitle1">Go</Typography>
            </Grid>
        </Grid>
    );
};

export default TableFooter;
