import React, { useState } from "react";

const CustomSelect = (props) => {
    
  const [data] = useState(props.data);
  const [selectedData, updateSelectedData] = useState("");
  
  const handleChange= (event) => {
    updateSelectedData(event.target.value);
    if (props.onSelectChange) props.onSelectChange(selectedData);
  };

  let options = data.map(data => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <select
      name="customSearch"
      onChange={handleChange}
      className={props.Style}
    >
      <option>{props.placeholder}</option>
      {options}
    </select>
  );
}
export default CustomSelect;