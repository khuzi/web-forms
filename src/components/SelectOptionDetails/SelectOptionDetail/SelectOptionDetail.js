import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./SelectOptionDetail.css";

import img from '../../../assets/images/4.png';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 0",
    padding: "0.5rem",
  },
  text1: {
    position: 'relative',
    fontWeight: "bold",
    marginLeft: "0.5rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginRight: '1rem',
      textAlign: 'center'
    },
  },
  sup: {
    color: 'red',
    fontSize: '10px',
    [theme.breakpoints.down("xs")]: {
      position: 'absolute',
      bottom: '-40%',
      right: '10%'
    }
  },
  text2: {
    color: theme.palette.danger,
    fontWeight: "600",
    fontSize: '14px',
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "0",
    },
  },
  text3: {
    fontSize: '18px',
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "0",
    },
  },
  i: {
    fontSize: "2.5rem",
    padding: "0.7rem",
    background: "green",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      padding: "0.5rem",
      margin: "0 2rem 0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      padding: "0.3rem",
      margin: "0 2rem 0 1rem",
    },
  },
  img: {
    width: '4rem',
    background: 'green',
    padding: '0.2rem',
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      padding: '0.1rem',
      marginLeft: '1rem'
    },
  },
  a: {
    color: 'red',
    textDecoration: 'underlined',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      marginLeft: '0.5rem'
    }
  }
}));

const SelectOptionDetail = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid
          container
          item
          sm={12}
          direction="row"
          alignItems="center"
          className={[classes.root, "listOptionWarper"].join(' ')}
        >
          <Grid item xs={3}>
            <Typography variant="h6" className={classes.text1}>
              {props.lisoption}<sup className={classes.sup}>{props.optional}</sup>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.text3}
            >
              {props.selectitems}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.text2}
            >
              0 Items selected
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={img} alt="" className={classes.img}></img>
          </Grid>
          <Grid item sx={1}><a className={classes.a} href="/">{props.Skip}</a></Grid>
          <Grid
            container
            item
            xs={2}
            md={2}
            lg={2}
            direction="column"
            alignItems="center"
            className="box"
          >
            <Typography variant="subtitle2">
              The box Contains for help details
              <br />
              when asking option
            </Typography>
            <Typography variant="subtitle2">
              Enter text here... Enter Text here
            </Typography>
            <Typography variant="subtitle2">
              Enter text here... Enter Text here
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SelectOptionDetail;
