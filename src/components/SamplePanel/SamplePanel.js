import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Textbox from '../UI/TextBox/Textbox';
import { Route } from 'react-router-dom';
import * as Components from '../../main';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ManageDivs from '../ManageDivs/ManageDivs';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiSvgIcon-root': {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: '#000',
    },
    '& .MuiStepIcon-text': {
      fill: '#fff'
    },
    '& .MuiStepConnector-lineHorizontal': {
      height: '0.2rem',
      backgroundColor: '#000',
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiSvgIcon-root': {
        fontSize: '1.5rem',
      }
    }
  },
  backButton: {
    backgroundColor: '#7868',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',

    }
  },
  rightButton: {
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',

    }
  },
  middleButton: {
    backgroundColor: '#fff001',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      width: '168px'
    }
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem 0'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  input: {
    width: '100%',
    border: '1px solid',
    padding: '1px'
  },
  DraftButton: {
    width: '88%',
    marginLeft: '5px',
    backgroundColor: '#fff001',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      marginLeft: '0px',
      fontSize: '12px'
    }
  },
  SaveButton: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#07ba6c',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      fontSize: '12px'
    }
  },
  Step: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
  }
}));

function getSteps() {
  return ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4'];
}


const SamplePanel = (props) => {

  const classes = useStyles();
  let componentrender = '';
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  if (activeStep === 0) {
    componentrender = <Components.SelectOptionsDetails />;
  }
  else if (activeStep === 1) {
    componentrender = <Components.Sample2 />;
  }
  else if (activeStep === 2) {
    componentrender = <Components.Sample3 />;
  }
  else if (activeStep === 3) {
    componentrender = <Components.Sample4 />;
  }

  return (
    <div className={classes.root}>
      <Stepper style={{ backgroundColor: 'rgba(233, 238, 227, 0.533)', padding: '3rem 0' }} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><Typography className={classes.Step}>{label}</Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
      <ManageDivs />
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <React.Fragment>
              <Container style={{ backgroundColor: '#fff' }} >
                <Typography component="div" >
                  {componentrender}
                </Typography>
                <div className={classes.buttonBox}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  <Button className={classes.middleButton} variant="contained">
                    FORM BY TEXT EDITOR {<CallMadeIcon fontSize='medium' style={{ marginLeft: '1rem', backgroundColor: '#000', color: '#fff' }} />}
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.rightButton} onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>

              </Container>
              <Container>
                <div style={{ marginTop: '2rem' }}>
                  <Grid container >
                    <Grid item xs={12} sm={6} md={8}>
                      <Textbox placeholder='Template Name' />
                    </Grid>
                    <Grid item xs={6} sm={3} md={2} >
                      <Button variant="contained" className={classes.DraftButton}>
                        Save Draft
                </Button>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                      <Button variant="contained" className={classes.SaveButton}>
                        Save & Start
                </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </React.Fragment>
          )}
      </div>
    </div>
  );
}

export default SamplePanel;
