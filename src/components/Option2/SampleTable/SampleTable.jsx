import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    table: {
        minWidth: 650,
    },
    SampleTable: {
        border: '1px solid #aaa',
        height: '390px',
        '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '0.5rem'
          },
         '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
         },
         '&::-webkit-scrollbar-thumb': {
            background: '#222',
            outline: '1px solid slategrey'
          }, 
    },
    header: {
        background: theme.palette.primary,
        padding: '1rem',
        '& > :first-child, & > :last-child,': {
            fontWeight: 'bold',
        }
    }
}));

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
        padding: '0.5rem'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#eee',
        },
    },
}))(TableRow);

const rows = ['12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22',
'12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22',
'12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22',
'12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22','12/12/2000 13:22',];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.SampleTable} style={{marginBottom: '1rem'}}>
            <div className={classes.header} style={{background: 'var(--primary'}}>
                <Typography variant="h5" align="center">Sample 1234...Data</Typography>
                <Typography variant="subtitle2" align="center">1,339 Total Records Found</Typography>
            </div>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row}>
                            <StyledTableCell align="left">{row}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
