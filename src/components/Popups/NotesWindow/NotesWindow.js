import React from 'react';
import Main from '../../Popups/Main/Main'

const data=[
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notest goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'label',label:'sample notes goes here',span:'6/20/2021 3:43 AM '},
    {type:'textbox',placeholder:'Note',width:'98%'},
    {type:'button',buttonName:'Submit'},
  ];

const NotesWindow = () =>{
    return(
        <Main type={data} heading='NOTES WINDOW'/>
    )
};
export default NotesWindow;
