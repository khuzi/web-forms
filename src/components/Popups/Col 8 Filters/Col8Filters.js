import React from 'react';
import Main from '../../Popups/Main/Main'

const data=[
    {type:'textbox'},
    {type:'button',buttonName:'Find'},
    {type:'button',buttonName:'Sort'},
    {type:'checkbox',checklist:'13.73'},
    {type:'checkbox',checklist:'11.71'},
    {type:'button',buttonName:'Close'},
    {type:'button',buttonName:'Select'},
    
  ];

const Col8Filters = () =>{
    return(
        <Main type={data} heading='COL 8 FILTERS'/>
    )
};
export default Col8Filters;