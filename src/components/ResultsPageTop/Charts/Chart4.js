import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Chart4.css';

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
        border: '1px solid #eee',
        padding: '0.5rem',
        color: '#fff',
        background: '#f4f4f4'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {

    },
}))(TableRow);



const rows = [
    { text: '2019', txt1: '100', txt2: '-58.63', txt3: '15.14', txt4: '54.1', txt5: '-76.32', txt6: '24.08', txt7: '23.64', txt8: '-92.86', txt9: '53.59', txt10: '49.4', txt11: '-56.64', txt12: '87.54' },
    { text: '2018', txt1: '-100', txt2: '58.63', txt3: '-15.14', txt4: '54.1', txt5: '-76.32', txt6: '24.08', txt7: '-23.64', txt8: '92.86', txt9: '-53.59', txt10: '-49.4', txt11: '56.64', txt12: '-87.54' },
    { text: '2017', txt1: '100', txt2: '-58.63', txt3: '15.14', txt4: '', txt5: '76.32', txt6: '24.08', txt7: '23.64', txt8: '-92.86', txt9: '53.59', txt10: '49.4', txt11: '-56.64', txt12: '87.54' },
    { text: '2016', txt1: '-100', txt2: '58.63', txt3: '-15.14', txt4: '54.1', txt5: '-76.32', txt6: '24.08', txt7: '-23.64', txt8: '', txt9: '-53.59', txt10: '49.4', txt11: '-56.64', txt12: '-87.54' },
    { text: '2015', txt1: '100', txt2: '-58.63', txt3: '15.14', txt4: '-54.1', txt5: '76.32', txt6: '-24.08', txt7: '23.64', txt8: '-92.86', txt9: '53.59', txt10: '49.4', txt11: '56.64', txt12: '-87.54' },
    { text: '2014', txt1: '-100', txt2: '-58.63', txt3: '-15.14', txt4: '54.1', txt5: '-76.32', txt6: '24.08', txt7: '-23.64', txt8: '92.86', txt9: '-53.59', txt10: '-49.4', txt11: '56.64', txt12: '-87.54' },
    { text: '2013', txt1: '-100', txt2: '58.63', txt3: '15.14', txt4: '54.1', txt5: '76.32', txt6: '24.08', txt7: '23.64', txt8: '-92.86', txt9: '53.59', txt10: '49.4', txt11: '-56.64', txt12: '87.54' },
    { text: '2012', txt1: '', txt2: '-58.63', txt3: '-15.14', txt4: '54.1', txt5: '-76.32', txt6: '24.08', txt7: '-23.64', txt8: '92.86', txt9: '-53.59', txt10: '-49.4', txt11: '56.64', txt12: '-87.54' },
];


const Chart4 = () => {
    return (
        <TableContainer component={Paper} style={{
            border: 'none',
            boxShadow: 'none',
            marginTop: '2rem',
        }}>
            <div className="tHead">
                <div className="item1">Jan</div>
                <div className="item2">Feb</div>
                <div className="item3">Mar</div>
                <div className="item4">Apr</div>
                <div className="item5">May</div>
                <div className="item6">Jun</div>
                <div className="item7">Jul</div>
                <div className="item8">Aug</div>
                <div className="item9">Sept</div>
                <div className="item10">Oct</div>
                <div className="item11">Nov</div>
                <div className="item12">Dec</div>
            </div>
            <Table style={{ minWidth: 1100 }}>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="right" style={{ border: 'none', color: '#000' , background: '#fff'}}>{row.text}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt1 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt1}{row.txt1 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt2 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt2}{row.txt2 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt3 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt3}{row.txt3 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt4 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt4}{row.txt4 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt5 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt5}{row.txt5 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt6 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt6}{row.txt6 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt7 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt7}{row.txt7 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt8 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt8}{row.txt8 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt9 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt9}{row.txt9 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt10 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt10}{row.txt10 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt11 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt11}{row.txt11 ? '%' : null}</StyledTableCell>
                            <StyledTableCell align="center" style={row.txt12 > 0 ? { background: 'green' } : { background: 'red' }}>{row.txt12}{row.txt12 ? '%' : null}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Chart4
