import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import OptionHeader from '../OptionHeader/OptionHeader';
import { Container } from '@material-ui/core';
import ManageDivs from '../ManageDivs/ManageDivs';
import Opt3CreateNew from './Opt3CreateNew/Opt3CreateNew';
import ManageExisting from '../ManageExisting/ManageExisting';
import { manageRoute } from '../../utility';
import './Option3.css';

const Option3 = (props) => {
    const [state, setState] = useState({ old: false, new: true });
    const manageHandlerOld = () => {
        manageRoute(props, '/option-3/manage-existing');
        setState({ old: true, new: false });
    }
    const manageHandlerNew = () => {
        manageRoute(props, '/option-3/create-new');
        setState({ old: false, new: true });
    }
    return (
        <section className="option3">
            <OptionHeader number="3" />
            <Container style={{ background: '#fff' }}>
                <ManageDivs
                    checkedOld={state.old}
                    checkedNew={state.new}
                    clickedNew={manageHandlerNew}
                    clickedOld={manageHandlerOld} />
                {state.new ? <Opt3CreateNew /> : <ManageExisting />}
            </Container>
        </section>
    );
};

export default withRouter(Option3);
