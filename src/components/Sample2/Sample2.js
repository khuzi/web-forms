import React from "react";
import Sample2Design from './Sample2Design/Sample2Design';
import Grid from "@material-ui/core/Grid";
import './Sample2.css';

let data = [
  { name: 'SEQUNCE1' },
  { name: 'SEQUNCE2' },
  { name: 'SEQUNCE1' },
  { name: 'SEQUNCE2' },
  { name: 'SEQUNCE1' },
  { name: 'SEQUNCE2' },
  { name: 'SEQUNCE1' },
  { name: 'SEQUNCE2' },
  { name: 'SEQUNCE1' },
  { name: 'SEQUNCE2' },
  { name: 'SEQUNCE1' },
];
const sample2 = (props) => {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={6}>
        <h2 className="Panel">Left Side</h2>
        <div className='backColor'>
          {data.map((data) => (
            <Sample2Design fullinputs />
          ))}
        </div>
      </Grid>

      <Grid xs={12} sm={12} md={6}>
        <h2 className="Panel">Right Side</h2>
        <div style={{ backgroundColor: '#fffde2' }}>
          {data.map((data) => (
            <Sample2Design fullinputs />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default sample2;
