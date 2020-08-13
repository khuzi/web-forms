import React, {useState} from "react";
import './input2.css';
const TextInput = (props)=> {
    
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')

  const handleChange=(event)=>{
    setInputValue(event.target.value);
    if(props.onChange) props.onChange(inputValue)
  };

  let input= '';
  if(inputType === 'checkbox' && props.sampleno ==='sample2'){
     input=(
         <> 
        <label>|||</label>
        <input type={inputType}  placeholder={props.placeholder} name="input-form" onChange={handleChange} class="inputclass"/>
        <label className={props.labelStyle}>{props.label}</label>
        </>
      )
  }
  else if(inputType === 'checkbox' && props.sampleno ==='sample3'){
    input=(
        <> 
       <input 
       type={inputType} 
       placeholder={props.placeholder} 
       name="input-form" 
       onChange={handleChange}
       className="inputField2"
       />
       <label className="input2Label">
         {props.label}
        </label>
       </>
     )
  }
  else if(props.sampleno ==='sample3' && props.notcheckbox){
    input = (
        <> 
        <label style={{color:'#5a5757',fontWeight:'bold'}}>{props.label}</label>
        <input style={{margin:'1rem',width:'56%'}} type={inputType}  placeholder={props.placeholder} name="input-form" onChange={handleChange}/>
        <br/>
        </>
    )
  }
  else if(props.sampleno ==='sample4' && props.notcheckbox){
    input = (
        <> 
        <label style={{marginLeft:'1%',color: '#5a5757',fontWeight: 'bold'}} >{props.label1}</label>
        <label style={{marginLeft:'2%',color: '#5a5757',fontWeight: 'bold'}} >{props.label2}</label>
        <input className={props.Style} type={inputType}  placeholder={props.placeholder} name="input-form" onChange={handleChange}/>
        <input className={props.Style} type={inputType}  placeholder={props.placeholder} name="input-form" onChange={handleChange}/>
        <br/>
        </>
    )
  }
  else{
    input = (
        <> 
        <input className={props.Style} type={inputType} value={inputValue} placeholder={props.placeholder} name="input-form" onChange={handleChange} />
        </>
    )
  }
  return (
    <>
      {input}      
    </>
  );
}
export default TextInput;