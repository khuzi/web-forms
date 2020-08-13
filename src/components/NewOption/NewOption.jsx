import React from 'react'
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    item: props => {
        return {
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 0',
            border: 'none',
            alignItems: 'center',
            background: '#fff001',
            width: '9.5rem',
            height: '12rem',
            cursor: 'pointer',
            boxShadow: 'none',
            [theme.breakpoints.down('md')]: {
                margin: '-0.3rem 0.5rem 0 0.5rem',
                width: '8rem',
                height: '11rem',

            },
            [theme.breakpoints.down('xs')]: {
                padding: '0.5rem 0',
                height: '9rem',
                width: '7rem',
            }
        }

    },
    textSub: {
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }
    },
    i: {
        fontSize: '1.5rem',
        background: '#fbfd8a',
        padding: '0.5rem',
        borderRadius: '50%',
        marginBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },
}))

const NewOption = (props) => {
    const classes = useStyles(props);
    return (
        <Grid item sm={2}>
            <Paper className={classes.item} onClick={props.clicked}>
                <i className={["fas fa-plus", classes.i].join(' ')}></i>
                <Typography variant="subtitle2" className={classes.textSub}>Click To Create New Template</Typography>
            </Paper>
        </Grid>
    )
}

export default NewOption
