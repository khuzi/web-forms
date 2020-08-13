import React from 'react'
import OptionHeader from '../OptionHeader/OptionHeader';
import { Container, Grid, Typography, makeStyles, Button } from '@material-ui/core';
import ListTable from './ListTable/ListTable';
import SampleTable from './SampleTable/SampleTable';
import './Option2.css';

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '1.5rem',
        background: theme.palette.secondary
    },
    text1: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        margin: '1rem 0',
    }
}));

const Option2 = () => {
    const classes = useStyles();
    return (
        <section className="option2-warper">
            <OptionHeader number="2" />
            <Container>
                <Grid container>
                    <Grid item xs={12} className={classes.header} style={{ background: '#000' }}>
                        <Typography className={classes.text1} variant="h5" align="center">List 1</Typography>
                    </Grid>
                </Grid>
                <ListTable />
                <Grid container justify="flex-end" className={classes.button}>
                    <Button variant="contained" color="secondary">Done</Button>
                </Grid>
                <SampleTable />
            </Container>
        </section>
    );
};
export default Option2;
