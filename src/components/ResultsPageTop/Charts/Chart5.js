import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [9.17, 1.09, 2.4, 9.13, -22.49, 1.75]
    }
  ]
};

const chart5 =()=>{
    return (
        <div style={{backgroundColor:'#fff'}}>
          <Bar
            data={data}
            width={100}
            height={30}
            // options={{
            //   maintainAspectRatio: true
            // }}
          />
        </div>
      );
}

export default chart5;