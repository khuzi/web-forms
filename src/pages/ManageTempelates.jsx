import React from 'react'
import { withRouter } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Option from '../components/Option/Option';
import NewOption from '../components/NewOption/NewOption';

import img1 from '../assets/images/6.png';
import img2 from '../assets/images/5.jpeg';
import img3 from '../assets/images/12.jpeg';
import img4 from '../assets/images/2.jpeg';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        maxWidth: '1100px',
        margin: '2rem auto',
        padding: '4rem 0'
    },
    text: {
        color: theme.palette.heading,
        fontWeight: 'bold',
        margin: '2rem 0'
    },
}));


const ManageTemplates = (props) => {

    const sampleHandler = (link) => {
        props.history.replace(link);
    }


    const data1 = [
        { text: 'Load', subText: 'Template 1', to: '/templates/samplePanel', img: img1 },
        { text: 'Load', subText: 'Template 2', to: '/templates/samplePanel', img: img2 },
        { text: 'Load', subText: 'Template 3', to: '/templates/samplePanel', img: img3 },
        { text: 'Load', subText: 'Template 4', to: '/templates/samplePanel', img: img4 },
    ]
    const data2 = [
        { text: 'Load', subText: 'Template 5', to: '/templates/samplePanel', img: img1 },
        { text: 'Load', subText: 'Template 6', to: '/templates/samplePanel', img: img2 },
        { text: 'Load', subText: 'Template 7', to: '/templates/samplePanel', img: img3 },
    ]
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid container item
                        justify="center"
                        direction="row"
                        alignItems="center">
                        {data1.map((el, id) => <Option key={id} text={el.text} url={el.img} fSize="16px" subText={el.subText} clicked={() => sampleHandler(el.to)} />)}
                    </Grid>
                    <Grid container item
                        justify="center"
                        direction="row"
                        alignItems="center">
                        {data2.map((el, id) => <Option key={id} text={el.text} url={el.img} fSize="16px" subText={el.subText} clicked={() => sampleHandler(el.to)} />)}
                        <NewOption />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default withRouter(ManageTemplates);
