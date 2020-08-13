import GaugeChart from 'react-gauge-chart'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const chart2 =()=>(
<Grid style={{marginTop:'1rem', backgroundColor:'#fff'}} container>
    <Grid style={{textAlign:'center'}} item xs={12} sm={4} >
      <GaugeChart id="gauge-chart5" nrOfLevels={2} arcWidth={0.29} arcsLength={[0.92,0.08]} colors={["#49A54F", "	#FFFF00"]} needleColor='#ffff' needleBaseColor='#ffff' textColor='#000' arcPadding={0} percent={0.9474} cornerRadius={0}  />
      <Typography variant="h6">Meter 1</Typography>
    </Grid>
    <Grid  style={{textAlign:'center'}} item xs={12} sm={4}>
      <GaugeChart id="gauge-chart6" nrOfLevels={2} arcWidth={0.29} arcsLength={[0.38,0.72]} colors={[ "#FFFF00",'#F92D16']} needleColor='#ffff' needleBaseColor='#ffff' textColor='#000'  arcPadding={0} percent={0.3500} cornerRadius={0} />
      <Typography variant="h6">Meter 2</Typography>
    </Grid>
    <Grid  style={{textAlign:'center'}} item xs={12} sm={4}>
      <GaugeChart id="gauge-chart7" nrOfLevels={2} arcWidth={0.29} arcsLength={[0.07,0.93]} colors={['#BDBDBD', "#FFFF00"]} needleColor='#ffff' needleBaseColor='#ffff' textColor='#000'  arcPadding={0} percent={0.0526} cornerRadius={0}  />
      <Typography variant="h6">Meter 3</Typography>
    </Grid>
  </Grid>
);

export default chart2;
