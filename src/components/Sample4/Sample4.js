import React from 'react';
import TransferList from './TransferList/TransferList';
import InputData from './InputData/InputData';
import {Container } from '@material-ui/core';

const sample4 =()=>{
    return(
     <div>
     <TransferList/>
     <Container>
     <InputData/>
     </Container>
     </div>
    );
}
export default sample4;
