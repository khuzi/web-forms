import GaugeChart from 'react-gauge-chart'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const chart1 = () => (
  <Grid style={{marginTop:'1rem', backgroundColor:'#fff'}} container>
    <Grid style={{textAlign:'center'}} item xs={12} sm={4} >
      <GaugeChart id="gauge-chart2" nrOfLevels={12} arcWidth={0.14} hideText="true" needleColor="red" arcPadding={0.02} percent={0.5248} cornerRadius={0}  />
      <Typography variant="h6">52.48%</Typography>
      <Typography variant="h6">Meter 1</Typography>
    </Grid>
    <Grid  style={{textAlign:'center'}} item xs={12} sm={4}>
      <GaugeChart id="gauge-chart3" nrOfLevels={12} arcWidth={0.14} hideText="true" needleColor="red" arcPadding={0.02} percent={0.88} cornerRadius={0} />
      <Typography variant="h6">88.00%</Typography>
      <Typography variant="h6">Meter 2</Typography>
    </Grid>
    <Grid  style={{textAlign:'center'}} item xs={12} sm={4}>
      <GaugeChart id="gauge-chart4" nrOfLevels={12} arcWidth={0.14} hideText="true" needleColor="red" arcPadding={0.02} percent={0.1505} cornerRadius={0}  />
      <Typography variant="h6">15.05%</Typography>
      <Typography variant="h6">Meter 3</Typography>
    </Grid>
  </Grid>
);
export default chart1;