import React from 'react';
import Input from '../../UI/Input2/Input'
import './InputData.css';
import Select from '../../UI/Selection/Selection'
let data=[
{type:'text',label1:'Option 2',label2:'Text1234'},
{type:'date',label1:'Option 7',label2:'Text1234'}
];
let select=[
    {name: 'SEQUNCE1'},
    {name: 'SEQUNCE2'}
  ];
  const SELECT=(
    <div>
    <label style={{marginLeft:'2%',color: '#5a5757',fontWeight: 'bold'}}>Option 8</label>
    <label style={{marginLeft:'2%',color: '#5a5757',fontWeight: 'bold'}}>Text 7</label>
    <Select Style='select'  data = {select}/>
    <Select Style='select'  data = {select}/>
    </div>
  );
const inputData =()=>{
    return(
     <div >
         {data.map((data)=>(
          <Input Style='Input' type={data.type} sampleno='sample4' notcheckbox label1={data.label1} label2={data.label2}/>
         ))}
         {SELECT}
         {SELECT}
     </div>
    );
}
export default inputData;
