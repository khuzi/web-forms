import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import OptionTable from '../OptionTable/OptionTable';
import { makeStyles } from '@material-ui/styles';
import './Side.css';
import FormTable from '../FormTable/FormTable';

const useStyles = makeStyles((theme) => ({
    text2: {
        fontSize: '14px',
        color: theme.palette.faIcons,
        fontWeight: '600'
    }
}))

const Side = (props) => {
    const data = [
        { label: 'FIRST', count: 2 },
        { label: 'SECOND', count: 0 },
        { label: 'THIRD', count: 1 },
        { label: 'FOURTH', count: 3 },
    ];
    const classes = useStyles();
    return (
        <Grid item className="side-container" container xs={12} md={6} justify="center">
            <Grid item xs={12} className="top-heading">
                <Typography variant="h6" align="center">{props.side}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={classes.text2} align="center" variant="subtitle1">Double Click Any Item To Add</Typography>
            </Grid>
            <Grid className="table-container" item container xs={12} justify="center">
                <OptionTable xs={8} sm={6} />
            </Grid>
            {data.map((el, id) => <FormTable key={id} label={el.label} count={el.count} />)}
        </Grid>
    );
};

export default Side;
