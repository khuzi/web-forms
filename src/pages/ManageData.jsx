import React from 'react'
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Option from '../components/Option/Option';
import NewOption from '../components/NewOption/NewOption';

import img1 from '../assets/images/6.png'
import img2 from '../assets/images/5.jpeg'
import img3 from '../assets/images/12.jpeg'


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        paddingBottom: '12rem',
        maxWidth: '1100px',
        margin: 'auto'
    },
    text: {
        color: theme.palette.heading,
        fontWeight: 'bold',
        margin: '2rem 0',
        paddingTop: '4rem'
    },
}));


const ManageData = (props) => {
    const optionHandler = (link) => {
        props.history.replace(link);
    }
    const classes = useStyles();
    const data = [
        { text: 'Option 1', link: '/option-1', url: img1 },
        { text: 'Option 2', link: '/option-2', url: img1 },
        { text: 'Option 3', link: '/option-3', url: img2 },
        { text: 'Option 4', link: '/option-4', url: img3 },
    ]
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Typography className={classes.text} variant="h4">Select A Data Type To Manage</Typography>
                <Grid container
                    justify="center"
                    direction="row"
                    alignItems="center">
                    {data.map((el, id) => <Option key={id} url={el.url} text={el.text} clicked={() => optionHandler(el.link)} />)}
                    <NewOption clicked={() => optionHandler('/option-5')}/>
                </Grid>
            </div>
        </React.Fragment>
    );
};

export default withRouter(ManageData);
