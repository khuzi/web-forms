import React from "react";
import Input from "../../UI/Input2/Input";
import "./BoxLayout.css";
import Select from '../../UI/Selection/Selection';

let data=[
  {name: 'SEQUNCE1'},
  {name: 'SEQUNCE2'}
];
const boxLayout=(props)=> {

  let box ='';
  if(props.multiselectonly){
    box=(
      <div className="BoxLayout">
      <Input type="checkbox" label={props.outerlabel} sampleno="sample3" />
      <div className='Select'>
        <label className='gray' >{props.innerfirstlabel}</label>
        <Select Style='Selectmargin' placeholder={props.placeholder1} data = {data}/>     
      </div>
      <div className='Select'>
        <label className='gray' >{props.innersecondlabel}</label>
        <Select Style='Selectmargin' placeholder={props.placeholder2} data = {data}/>
      </div>
      </div>

    );
    }
    
    else{
      box=(
        <div className="BoxLayout">
        <Input type="checkbox" label={props.outerlabel} sampleno="sample3" />
        <div style={{ textAlign: "center" }}>
          <Input
            type={props.innerfirsttype}
            label={props.innerfirstlabel}
            sampleno="sample3"
            notcheckbox='true'
            placeholder={props.placeholder1}
          />
          <Input
            type={props.innersecondtypetype}
            label={props.innersecondlabel}
            sampleno="sample3"
            notcheckbox='true'
            placeholder={props.placeholder2}
          />
        </div>
        </div>
      );
    }
  return(
    <div>
     {box}
    </div>
  );


 
};

export default boxLayout;
