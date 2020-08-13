import React from 'react';
import Main from '../../Popups/Main/Main'

const data=[
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'},
    {type:'label',label:'Details Text goes here'}
  ];

const RowDetailsWindow = () =>{
    return(
        <Main type={data} heading='ROW DETAILS WINDOW'/>
    )
};

export default RowDetailsWindow;