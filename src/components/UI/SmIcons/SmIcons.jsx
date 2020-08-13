import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './SmIcons.css';

const SmIcons = (props) => {
    return (
        <div className="smIcons">
            {props.all ? [
                <CloseIcon />,
                <ArrowDropDownIcon />] :
                <CloseIcon className="close"/>
            }

        </div>
    );
};

export default SmIcons;
