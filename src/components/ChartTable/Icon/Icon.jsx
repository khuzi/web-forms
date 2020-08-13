import React from 'react'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        '& > :first-child': {
            background: '#eee',
            color: theme.palette.faIcons,
            borderRadius: '50%',
            fontSize: '2.3rem',
            padding: '0.5rem',
            margin: '0.2rem',
            cursor: 'pointer'
        }
    }

}))

const Icon = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={props.clicked}>
            {props.Icon}
        </div>
    )
}

export default Icon
