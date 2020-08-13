import React from 'react'
import { Grid } from '@material-ui/core';
import './OptionTable.css';

const OptionTable = (props) => {
    const data = [
        { text: 'Option 2 - Text 123456' },
        { text: 'Option 5 - Text 12345' },
        { text: 'Option 7 - Text 123' },
        { text: 'Option 9 - Text 15' },
        { text: 'Option 5 - Text 7' },
        { text: 'Option 6 - Text 12' },
        { text: 'Option 11 - Text 1234' },
        { text: 'Option 4 - Text 12' },
        { text: 'Option 6 - Text 3456' },
        { text: 'Option 3 - Text 1256' },
        { text: 'Option 8 - Text 1236' },
        { text: 'Option 10 - Text 123456' },
        { text: 'Option 15 - Text 156' },
        { text: 'Option 7 - Text 1256' },
        { text: 'Option 9 - Text 1256' },
        { text: 'Option 11 - Text 156' },
    ]
    return (
        <Grid item xs={props.xs} sm={props.sm}>
            <ul className="table">
                {data.map((el, id) => (
                    <li key={id}>{el.text}
                        <div className="img">
                            <i className="fas fa-question-circle"></i>
                        </div>
                    </li>
                ))}
            </ul>
        </Grid>
    );
};

export default OptionTable;



// Option 2 - Text 123456<i className="fas fa-question-circle"></i> 
