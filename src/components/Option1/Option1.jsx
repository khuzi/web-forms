import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ManageDivs from '../ManageDivs/ManageDivs';
import Option1CreateNew from './Op1CreateNew/Op1CreateNew';
import ManageExisting from '../ManageExisting/ManageExisting';
import OptionHeader from '../OptionHeader/OptionHeader';
import { manageRoute } from '../../utility';
import './Option1.css';

const Option1 = (props) => {
    const [state, setState] = useState({ old: false, new: true });
    const manageHandlerOld = () => {
        manageRoute(props, '/option-1/manage-existing');
        setState({ old: true, new: false });
    }
    const manageHandlerNew = () => {
        manageRoute(props, '/option-1/create-new');
        setState({ old: false, new: true });
    }
    return (
        <section className='option1'>
            <OptionHeader number="1" />
            <Container >
                <ManageDivs
                    checkedOld={state.old}
                    checkedNew={state.new}
                    clickedNew={manageHandlerNew}
                    clickedOld={manageHandlerOld} />
                {state.new ? <Option1CreateNew /> : <ManageExisting />}
            </Container>
        </section >
    );
};

export default withRouter(Option1);
