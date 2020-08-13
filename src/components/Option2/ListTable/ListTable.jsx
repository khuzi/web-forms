import React from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '../../UI/Input1/Input';
import './ListTable.css';

const StyledTableCell = withStyles((theme) => ({
    body: {
      fontSize: 14,
      borderBottom: 'none',
      padding: '0 2rem',
    }
  }))(TableCell);


const useStyles = makeStyles({
    table: {
        minWidth: 1100,
        border: '1px solid #ccc',
    },
});



const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export default function ListTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className="ListTable">
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row}>
                            <StyledTableCell style={{background: '#eee'}} align="right">
                                <div className="listWarper">
                                    <div className="item1">
                                        <Input element="checkBox"/>
                                        <p>Item 1</p>
                                    </div>
                                    <div className="item2">
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                            <div className="listWarper">
                                    <div className="item1">
                                        <Input element="checkBox"/>
                                        <p>Item 1</p>
                                    </div>
                                    <div className="item2">
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right" style={{background: '#eee'}}>
                            <div className="listWarper">
                                    <div className="item1">
                                        <Input element="checkBox"/>
                                        <p>Item 1</p>
                                    </div>
                                    <div className="item2">
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell className="tableCell">
                            <div className="downBtn">
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </TableCell>
                        <TableCell className="tableCell">
                            <div className="downBtn">
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </TableCell>
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