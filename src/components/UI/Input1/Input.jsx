import React from 'react'
import { Select, Checkbox, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import './Input.css';

let elementType = null;
const Input = (props) => {
    switch (props.element) {
        case 'select':
            elementType =
                <FormControl variant="outlined">
                    <InputLabel className="inputLabel" id="demo-simple-select-filled-label">{props.label}</InputLabel>
                    <Select
                        className="select1"
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled">
                        <MenuItem value="">
                            <em>None</em>   
                        </MenuItem>
                        <MenuItem value={props.label}>Ten</MenuItem>
                    </Select>
                </FormControl>
            break;
        case 'input':
            elementType =
                <input className="input1" />
            break;
        case 'checkBox':
            elementType = <Checkbox className="checkBox1" />
            break;
        default:
            elementType = <Select />
            break;
    }
    return (
        <>
            {elementType}
        </>
    );
};

export default Input;
