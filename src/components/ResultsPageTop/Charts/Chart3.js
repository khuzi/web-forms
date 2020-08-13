import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart3.css';

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'My Second dataset',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(71,792,192,0.4)',
        borderColor: 'rgba(75,892,192,1)',
        borderCapStyle: 'sutt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,92,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [68, 39, 40, 61, 16, 35, 50]
      },
      
  ]
};

const line =()=>{
    return (
      <div  style={{ backgroundColor: "#fff",marginTop:'1rem'}}>
        <div className='Searching'>
          <h4 className='text' >
            Compare With  <input className='input' type="text" />
          </h4>
          <h4 className='text'>
            From Number of Days <input className='input' type="text" />

          </h4>
          <h4 className='text' >
            To Number of Days  <input className='input' type="text" />

          </h4>

        </div>
        <Line height={80} data={data} />
      </div>
    );
};
export default line;