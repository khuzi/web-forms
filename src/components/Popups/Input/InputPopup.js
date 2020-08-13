import React from "react";

let inputPopup = (props) => {
  let element = null;
  switch (props.type) {
    case "label":
      return (element = (
        <div
          style={{
            color: "#000",
            backgroundColor: "#f8f9fa",
            fontFamily: "Segoe UI",
            textAlign: "left",
            
          }}
        >
          <span style={{color:'#1601f9'}}>{props.span}</span><label style={{color:props.color}}>{props.label}</label>
        </div>
      ));
    case "checkbox":
        return (element = <div style={{textAlign: "left"}}><input type="checkbox" {...props} /><span style={{color:'#000'}}>{props.checklist}</span></div>)
    case "textbox":
      return (element = <input type="text" style={{width:props.width,textAlign: "left",marginTop:'1rem',padding:'0.5rem',fontFamily:'Segoe UI Semibold',border:'1px groove'}} {...props} />)
    case "button":
        return (element = <button style={{marginLeft:'1rem',backgroundColor:'#f2f3f6',color:'#000',padding:'0.5rem',fontSize:'18px',marginTop:'1rem',fontFamily:'Segoe UI Semibold',border:'1px groove'}}>{props.buttonName}</button>)
    default:
      return (element = '');
  }
};

export default inputPopup;
