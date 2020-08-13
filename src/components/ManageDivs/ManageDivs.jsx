import React from 'react'
import { Grid } from '@material-ui/core';
import './ManageDivs.css';

import Manage from './Manage/Manage';

const ManageDiv = (props) => {
    return (
        <Grid container justify="space-around" className="ManageDiv">
            <Manage text="Create New" checked={props.checkedNew} clicked={props.clickedNew}/>
            <Manage text="Manage Existing" checked={props.checkedOld} clicked={props.clickedOld}/>
        </Grid>
    );
};

export default ManageDiv;
