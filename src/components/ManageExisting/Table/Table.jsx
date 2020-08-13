import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SmIcons from '../../UI/SmIcons/SmIcons';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#f4f4f4',
        color: '#888',
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: '600',
        border: '1px solid #ccc',
        position: 'relative',
    },
    body: {
        fontSize: 14,
        border: '1px solid #ccc',
        borderBottom: '1px solid #fff',
        overFlow: 'scroll'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#eee',
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 1100,
    },
    records: {
        color: theme.palette.count,
        fontWeight: '600'
    },
    input: {
        width: '80%',
        padding: '0.3rem 0.5rem',
        border: '1px solid #aaa',
        borderRadius: '3px',
        '&::placeholder': {
            color: '#000'
        }
    },
    dateTime: {
        fontWeight: '600'
    },
    actionWarper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > i': {
            color: `${theme.palette.danger}`,
            fontSize: '1rem',
            background: theme.palette.dangerBg,
            padding: '0.4rem',
            borderRadius: '50%'
        },
        '& > div': {
            background: '#fffade',
            padding: '0.3rem 0.8rem',
            borderRadius: '25px'
        },
    }
}));


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function CustomizedTables() {
    const classes = useStyles();

    const headRow = [
        { title: 'row', icon: <SmIcons all /> },
        { title: 'records count', icon: <SmIcons all /> },
        { title: 'saved items', icon: <SmIcons all /> },
        { title: 'created date time', icon: <SmIcons all /> },
        { title: 'last updated date time', icon: <SmIcons all /> },
        { title: 'actions' },
    ]
    const rows = [
        createData(1, '1234', 'Sample 1234'),
        createData(2, '33', 'Sample 12345'),
        createData(3, '465', 'Sample 124'),
        createData(4, '15,237', 'Sample 1248'),
        createData(5, '101,237', 'Sample 1734'),
        createData(6, '82,338', 'Sample 12'),
    ];

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headRow.map((el, id) => {
                            return <StyledTableCell align="center">{el.title}{el.icon}</StyledTableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center"><Typography className={classes.records} variant="subtitle2">{row.calories}</Typography></StyledTableCell>
                            <StyledTableCell align="center"><input className={classes.input} placeholder={row.fat} /></StyledTableCell>
                            <StyledTableCell align="center"><Typography className={classes.dateTime} variant="subtitle2">01/01/2000 09:35AM</Typography></StyledTableCell>
                            <StyledTableCell align="center"><Typography className={classes.dateTime} variant="subtitle2">01/01/2000 09:35AM</Typography></StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={classes.actionWarper}>
                                    <div>
                                        <Typography variant="subtitle2">Click To Update</Typography>
                                    </div>
                                    <i className="fas fa-times"></i>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
