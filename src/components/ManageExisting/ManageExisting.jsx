import React from 'react'
import { Typography } from '@material-ui/core';
import Table from './Table/Table';
import TableFooter from '../TableFooter/TableFooter';
import './ManageExisting.css';

const ManageExisting = () => {
    return (
        <section className="ManageExisting">
            <Typography variant="h4" align="center">Manage Existing</Typography>
            <Table />
            <TableFooter />
        </section>
    );
};

export default ManageExisting;
