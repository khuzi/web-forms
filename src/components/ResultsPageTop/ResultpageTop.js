import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { makeStyles, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Transferfiles from '../Sample4/TransferList/TransferList';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import Chart4 from './Charts/Chart4';
import Chart5 from './Charts/Chart5';
import { Route, Switch } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *:first-child': {
      '& > *:first-child': {
        background: '#000',
        color: '#fff',
      }
    },
    fontFamily: 'Segoe UI Semibold'
  },
  control: {
    padding: theme.spacing(1),
    backgroundColor: '#eeeeee',
    "&:hover": {
      cursor: 'pointer'
    },
    textAlign: 'center',
  },
  displayStyle: {
    padding: theme.spacing(1),
    backgroundColor: '#ffff5f',
    textAlign: 'center',
    "&:hover": {
      cursor: 'pointer'
    },
    fontFamily: 'Segoe UI Semibold'
  },
  transferList: {
    backgroundColor: '#f8f8f8',
    padding: '2rem'
  },
  a: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  active: {
    '& .activeLink': {
      background: '#000',
      color: '#fff',
    }
  },
}));
const labels = [
  { label: 'Main' },
  { label: 'Tab 2' },
  { label: 'Tab 3' },
  { label: 'Tab 4' },
  { label: 'Tab 5' },
  { label: 'Tab 6' },
  { label: 'Tab 7' },
  { label: 'Tab 8' },
  { label: 'Tab 9' },
  { label: 'Tab 10' },
  { label: 'Tab 11' },
  { label: 'Tab 12' }
];
const DisplayChartLabel = [
  { DisplayChartLabel: 'Display Chart Style 1', to: '/viewResult', exact: true },
  { DisplayChartLabel: 'Display Chart Style 2', to: '/viewResult/DisplayChartStyle2' },
  { DisplayChartLabel: 'Display Chart Style 3', to: '/viewResult/DisplayChartStyle3' },
  { DisplayChartLabel: 'Display Chart Style 4', to: '/viewResult/DisplayChartStyle4' },
  { DisplayChartLabel: 'Display Chart Style 5', to: '/viewResult/DisplayChartStyle5' },
  { DisplayChartLabel: 'Display Chart Style 6', to: '/viewResult/DisplayChartStyle6' }
];
const ResultPageTop = () => {
  const classes = useStyles();
  return (

    <div style={{ padding: '3rem 0', backgroundColor: 'f7f7f7' }}>
      <Container>
        <div>
          <Typography variant='h4' align="center">Page Title Goes Here</Typography>
          <Typography variant='h4' align="center">Page Title Line 2 Goes Here</Typography>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Grid container className={classes.root} border={8} spacing={1}>
            {labels.map(labels => (
              <Grid item xs={4} sm={2} md={1}>
                <Paper className={classes.control}>{labels.label}</Paper>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className='Result' >
          <Grid container spacing={1} >
            {DisplayChartLabel.map(labels => (
              <Grid item xs={6} sm={2} md={2} key={labels.to}>
                <NavLink exact={labels.exact} to={labels.to} className={classes.a} activeClassName={classes.active}>
                  <Paper className={[classes.displayStyle, 'activeLink'].join(' ')}>{labels.DisplayChartLabel}</Paper>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={{ backgroundColor: '#fbfbfd' }}>
          <Switch>
            <Route path='/viewResult/DisplayChartStyle2' render={Chart2} />
            <Route path='/viewResult/DisplayChartStyle3' render={Chart3} />
            <Route path='/viewResult/DisplayChartStyle4' render={Chart4} />
            <Route path='/viewResult/DisplayChartStyle5' render={Chart5} />
            <Route path='/viewResult' render={Chart1} />
          </Switch>
        </div>
        <Transferfiles />
      </Container>
    </div>

  );
};
export default ResultPageTop;