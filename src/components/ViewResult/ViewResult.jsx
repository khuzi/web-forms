import React from 'react'
import ChartTable from '../../components/ChartTable/ChartTable'
import TableFooter from '../../components/TableFooter/TableFooter';
import ResultTop from '../../components/ResultsPageTop/ResultpageTop';

const ViewResult = () => {
    return (
        <>
            <ResultTop />
            <ChartTable />
            <TableFooter />
        </>
    )
}

export default ViewResult
