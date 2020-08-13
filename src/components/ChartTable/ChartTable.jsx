import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SmIcons from '../UI/SmIcons/SmIcons';
import Input from '../UI/Input1/Input';
import EmailIcon from '@material-ui/icons/Email';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SaveIcon from '@material-ui/icons/Save';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Icon from './Icon/Icon';
import StatusBox from './StatusBox/StatusBox';
import DetalBox from './DetalBox/DetalBox';
import Chart1Box from './Chart1Box/Chart1Box';
import Chart2Box from './Chart2Box/Chart2Box';
import TopButton from './TopButton/TopButton';

import pic from '../../assets/images/tbl.png';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#f3f3f3',
        color: '#555',
        fontWeight: 'bold',
        border: '1px solid #aaa',
        position: 'relative',
        padding: '0.5rem'
    },
    body: {
        fontSize: 14,
        border: '1px solid #aaa',
        textAlign: 'center',
        width: '100%',
        padding: 1
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({

}))(TableRow);

const Btn = [
    { text: 'Style1', pic: pic, link: '/viewResult', exact: true },
    { text: 'Style2', pic: pic, link: '/data' }
]

const headRow = [
    { text: <Input element="checkBox" /> },
    { text: 'ICON', icon: <SmIcons all /> },
    { text: 'COL2', icon: <SmIcons all /> },
    { text: 'COL4', icon: <SmIcons all /> },
    { text: 'STATUS', icon: <SmIcons all /> },
    { text: 'VAL11+DATEL', icon: <SmIcons all /> },
    { text: 'COL9', icon: <SmIcons all /> },
    { text: 'CHART1', icon: <SmIcons /> },
    { text: 'CHART2', icon: <SmIcons /> },
    { text: 'COL10', icon: <SmIcons /> },
    { text: 'COL11', icon: <SmIcons all /> },
];


const rows = [
    [{ element: 'default', gr: true, grDetal: true }],
    [{ element: 'default', gr: false, grDetal: true }],
    [{ element: 'default', gr: true, grDetal: true }],
    [{ element: 'default', gr: true, grDetal: false }],
    [{ element: '', grDetal: true }],
    [{ element: 'default', gr: true, grDetal: false }],
];


const useStyles = makeStyles({
    table: {
        width: 1000,
        '& .icnWarper': {
            display: 'flex',
            flexDirection: 'column',
        },
        '& .icnWarper .icons': {
            display: 'flex'
        },
    },
    main: {
        padding: '1rem 2rem'
    },
    headWarper: {
        margin: '2rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '1100px',
        overflow: 'auto'
    },
    left: {
        width: '30%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    right: {
        width: '60%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    i1: {
        background: 'coral',
        color: '#fff',
        fontSize: '1.8rem',
        padding: '0.8rem',
        borderRadius: '1px'
    },
    i2: {
        background: '#000',
        color: '#fff',
        fontSize: '1.8rem',
        padding: '0.8rem',
        borderRadius: '1px'
    },
    progressBtn: {
        background: 'green',
        color: '#fff',
        textTransform: 'capitalize',
        padding: '1rem',
        width: '10rem',
        fontSize: '16px',
        textAlign: 'center'
    },
    left2: {
        width: '20%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    right2: {
        width: '25%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& > *:first-child': {
            background: 'coral',
            color: '#fff',
            padding: '0.5rem',
            border: 'none',
            margin: '0 0.5rem'
        },
        '& > *:nth-child(2)': {
            background: 'purple',
            color: '#fff',
            padding: '0.5rem',
            border: 'none',
            margin: '0 0.5rem'
        }
    }

});

export default function ChartTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.main}>
            <div className={classes.headWarper}>
                <div className={classes.left}>
                    {Btn.map((el, id) => {
                        return <TopButton key={id} text={el.text} pic={el.pic} link={el.link} exact={el.exact} />
                    })}
                </div>
                <div className={classes.right}>
                    <TopButton text="Update Now" typeElement="simple" />
                    <TopButton text="Clear Filter" typeElement="simple" />
                    <TopButton text="Clear Sorting" typeElement="simple" />
                    <i className={["fas fa-filter", classes.i1].join(' ')}></i>
                    <i className={["fas fa-pen", classes.i2].join(' ')}></i>
                    <div variant="contained" className={classes.progressBtn}>Progress 75%</div>
                </div>
            </div>
            <div className={classes.headWarper}>
                <div className={classes.left2}><h5>Page 1 of 36827 (Records 1to 10)</h5></div>
                <div className={classes.right2}>
                    <button>PDF</button>
                    <button>CSV</button>
                    <h6>Last Updated-01/12/2020 09:31AM</h6>
                </div>
            </div>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headRow.map((el, i) => {
                            return <StyledTableCell align="center">{el.text}{el.icon}</StyledTableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row}>
                            <StyledTableCell component="th" scope="row">
                                <Input element="checkBox" />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <div className="icnWarper">
                                    <div className="icons">
                                        <Icon Icon={<EmailIcon />} />
                                        <Icon Icon={<CreateIcon />} />
                                        <Icon Icon={<VisibilityIcon />} />
                                        <Icon Icon={<DeleteIcon />} />
                                    </div>
                                    <div className="icons">
                                        <Icon Icon={<AssignmentIcon />} />
                                        <Icon Icon={<DescriptionIcon />} />
                                        <Icon Icon={<FileCopyIcon />} />
                                        <Icon Icon={<SaveIcon />} />
                                    </div>
                                    <div className="icons">
                                        <Icon Icon={<NotificationsIcon />} />
                                    </div>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center"><Typography variant="subtitle1" style={{ fontWeight: 'bold', padding: '0 0.1rem' }}>11:30&nbsp;AM</Typography></StyledTableCell>
                            <StyledTableCell align="center"><Typography variant="subtitle1" style={{ fontWeight: 'bold', padding: '0 0.1rem' }}>11:59&nbsp;PM</Typography></StyledTableCell>
                            <StyledTableCell align="center">
                                {row.map((el, id) => {
                                    return <StatusBox key={id} gr={el.gr} element={el.element} />
                                })}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.map((el, id) => {
                                    return <DetalBox key={id} grDetal={el.grDetal} />
                                })}
                            </StyledTableCell>
                            <StyledTableCell align="center"><Typography variant="subtitle1" style={{ fontWeight: 'bold', padding: '0 0.1rem' }}>0.00</Typography></StyledTableCell>
                            <StyledTableCell align="center">
                                <Chart1Box />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Chart2Box />
                            </StyledTableCell>
                            <StyledTableCell align="center"><Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>0.00</Typography></StyledTableCell>
                            <StyledTableCell align="center"><Typography variant="subtitle1" style={{ fontWeight: 'bold', padding: '0 0.1rem' }}>(T1163*10)</Typography></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
