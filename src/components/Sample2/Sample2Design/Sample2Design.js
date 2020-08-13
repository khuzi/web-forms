import React from "react";
import Selection from '../../UI/Selection/Selection';
import Input from '../../UI/Input2/Input';
import './Sample2Design.css'

let input ='';
let dataOptions=[
    {name: 'SEQUNCE1'},
    {name: 'SEQUNCE2'}
 ];
const sample2 = (props) => {
  if(props.fullinputs){
    input=(
    <div style={{textAlign:'center'}}>
    <Input labelStyle='labelstyle' type='checkbox' label='L-Option1' sampleno='sample2' />
    <Selection Style='Design' data = {dataOptions} placeholder='SET'/>
    <Selection Style='Design' data = {dataOptions} placeholder='SEQUENCE'/>
    <Input Style='Design' type='text'/>
    <Input Style='Design' type='text'/>
    </div>
    );
  }
  return(
   <div>
   {input}
   </div>
  )
};

export default sample2;