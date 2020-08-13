import React from 'react'
import {  Typography, Grid } from '@material-ui/core';
import Input from '../UI/Input1/Input';
import './FormTable.css'

let textBoxes = 'null';
const FormTable = (props) => {
    switch (props.count) {
        case 1:
            textBoxes =
                <Grid item xs={2}>
                    <Input element="input" />
                </Grid>
            break;
        case 2:
            textBoxes = [
                <Grid item xs={2}>
                    <Input element="input" />
                </Grid>,
                <Grid item xs={2}>
                    <Input element="input" />
                </Grid>
            ]
            break;
        case 3:
            textBoxes = [
                <Grid item xs={3} md={2}>
                    <Input element="input" />
                </Grid>,
                <Grid item xs={3} md={2}>
                    <Input element="input" />
                </Grid>,
                <Grid item xs={3} md={2}>
                    <Input element="input" />
                </Grid>
            ]
            break;
        default:
            textBoxes = null;
            break;
    }

    return (
        <Grid className="formTable" item container sm={12} alignItems="center">
            <Typography variant="subtitle2">|||</Typography>
            <Input element="checkBox" />
            <Typography variant="subtitle2">Any Text 123485</Typography>
            <i className="fas fa-question-circle"></i>
            <Grid item xs={2}>
                <Input element="select" label={props.label} />
            </Grid>
            {textBoxes}
        </Grid>
    );
};

export default FormTable;
