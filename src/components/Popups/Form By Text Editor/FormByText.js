import React from 'react';
import Main from '../../Popups/Main/Main'

const data=[
    {type:'label',label:'L-Option 1 Set: Set'},
    {type:'label',label:'L-Option 1 Set: Sequence: FIRST'},
    {type:'label',label:'L-Option 1 12345: 05',color:'#fe4344'},
    {type:'label',label:'L-Option 2 Set: Set'},
    {type:'label',label:'L-Option 2 Set: Sequence: SECOND'},
    {type:'label',label:'L-Option 2 Form: 06'},
    {type:'label',label:'L-Option 2',color:'#fe4344'},
    {type:'button',buttonName:'Window to Form'},
    {type:'button',buttonName:'Form to Window'},
  ];

const FormByText = () =>{
    return(
        <Main type={data} heading='FORM BY TEXT EDITOR WINDOW'/>
    )
};
export default FormByText;