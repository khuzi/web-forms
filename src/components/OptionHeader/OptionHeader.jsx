import React from 'react'
import { Typography } from '@material-ui/core'
import './OptionHeader.css';

import img from '../../assets/images/6.png';

const OptionHeader = (props) => {
    return (
        <div className='heading'>
            <img src={img} alt="" className="headImg" />
            <Typography variant="h4">Option {props.number} Name {props.text}</Typography>
        </div>
    );
};

export default OptionHeader;
