import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import ResultTable from '../components/ResultTable/ResultTable';
import ViewResult from '../components/ViewResult/ViewResult';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        padding: '2.1rem',
        textAlign: 'center'
    }
})

const ManageResults = () => {
    const classes = useStyles();
    const [check, setCheck] = useState(0);
    const viewComponent = check >= 3 ? <Redirect to="/viewResult" /> : null;
return (
    <div className={classes.root}>
        {viewComponent}
        <h1>Please Select a Item to View Results</h1>
        <ResultTable check={check} clicked={() => setCheck(check + 1)} />
    </div>
);
};

export default ManageResults;
