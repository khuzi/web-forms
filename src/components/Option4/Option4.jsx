import React, { useState } from 'react'

import OptionHeader from '../OptionHeader/OptionHeader';
import ManageDivs from '../ManageDivs/ManageDivs';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { manageRoute } from '../../utility';
import ManageExisting from '../ManageExisting/ManageExisting';
import { SamplePanel } from '../../main';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '6rem 0',
        background: '#f4f4f4'
    }
}))

const Option4 = (props) => {
    const [state, setState] = useState({ old: false, new: true });
    const manageHandlerOld = () => {
        manageRoute(props, '/option-4/manage-existing');
        setState({ old: true, new: false });
    }
    const manageHandlerNew = () => {
        manageRoute(props, '/option-4/create-new');
        setState({ old: false, new: true });
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <OptionHeader number="4" />
            <Container style={{background: '#fff'}}>
                <ManageDivs
                    checkedOld={state.old}
                    checkedNew={state.new}
                    clickedNew={manageHandlerNew}
                    clickedOld={manageHandlerOld} />
                {state.new ? <SamplePanel /> : <ManageExisting />}
            </Container>
        </div>
    )
}

export default withRouter(Option4);
