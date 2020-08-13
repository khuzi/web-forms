import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ResultTable.css';

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
        borderBottom: 'none',
        padding: '0',
    }
}))(TableCell);


const useStyles = makeStyles({
    table: {
        minWidth: 1100,
    },
});



const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export default function ResultTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className="ListTable">
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row}>
                            <StyledTableCell style={{ background: '#eee', width: '15rem' }} align="right">
                                <button className="listWarper" style={{ position: 'relative' , border: 'none', width: '16rem', height: '1.8rem', marginLeft: '0.5rem', paddingRight: '0.2rem' }}>
                                    <div className="item1">
                                        <p>Item 1</p>
                                    </div>
                                    <div className="item2" style={{ background: '#eee', marginLeft: '2rem' }}>
                                    <Checkbox
                                            onClick={props.clicked}
                                            style={{ fontSize: '1.2rem', margin: '0.5rem 0', position: 'absolute' , bottom: '-45%' , right: '5%' }}
                                            icon={<i></i>}
                                            checkedIcon={<i className="fas fa-check" style={{ color: 'green' }}></i>}
                                        />
                                        <i className="fas fa-angle-right"></i>

                                    </div>
                                </button>
                            </StyledTableCell>
                            <StyledTableCell align="right" style={{ width: '18rem' }}>
                                <button className="listWarper" style={{ position: 'relative', marginLeft: '4rem', background: '#fff', marginBottom: '0.5rem', border: '1px solid #aaa', height: '    1.8rem', borderRadius: '5px', width: '16rem' }}>
                                    <div className="item1">
                                        <p>Level 2 - item</p>
                                    </div>
                                    <div className="item2">
                                        <Checkbox
                                            onClick={props.clicked}
                                            style={{ fontSize: '1.2rem', margin: '0.5rem 0', position: 'absolute', top: '-50%', right: '0' }}
                                            icon={<i className="fas fa-times" style={{ color: '#ccc' }}></i>}
                                            checkedIcon={<i className="fas fa-check" style={{ color: 'green' }}></i>}
                                        />
                                    </div>

                                </button>
                            </StyledTableCell>
                            <StyledTableCell align="right" style={{ width: '18rem' }}>
                                <button className="listWarper" style={{ position: 'relative', marginLeft: '4rem', background: '#fff', marginBottom: '0.5rem', border: '1px solid #aaa', height: '    1.8rem', borderRadius: '5px', width: '16rem' }}>
                                    <div className="item1">
                                        <p>Level 2 - item</p>
                                    </div>
                                    <div className="item2">

                                        <Checkbox
                                            onClick={props.clicked}
                                            style={{ fontSize: '1.2rem', margin: '0.5rem 0', position: 'absolute', top: '-50%', right: '0' }}
                                            icon={<i className="fas fa-times" style={{ color: '#ccc' }}></i>}
                                            checkedIcon={<i className="fas fa-check" style={{ color: 'green' }}></i>}
                                        />
                                    </div>

                                </button>
                            </StyledTableCell>
                            <StyledTableCell align="right" style={{ width: '18rem' }}>
                                <button className="listWarper" style={{ position: 'relative', marginLeft: '4rem', background: '#fff', marginBottom: '0.5rem', border: '1px solid #aaa', height: '    1.8rem', borderRadius: '5px', width: '16rem' }}>
                                    <div className="item1">
                                        <p>Level 2 - item</p>
                                    </div>
                                    <div className="item2">

                                        <Checkbox
                                            onClick={props.clicked}
                                            style={{ fontSize: '1.2rem', margin: '0.5rem 0', position: 'absolute', top: '-50%', right: '0' }}
                                            icon={<i className="fas fa-times" style={{ color: '#ccc' }}></i>}
                                            checkedIcon={<i className="fas fa-check" style={{ color: 'green' }}></i>}
                                        />
                                    </div>

                                </button>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell className="tableCell">
                            <div className="downBtn">
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}