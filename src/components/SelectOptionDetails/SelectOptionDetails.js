import React from 'react';
import SelectOptionDetail from '../SelectOptionDetails/SelectOptionDetail/SelectOptionDetail';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: '#3c3c3c',
    '& > *:first-child': {
      background: 'var(--primary)',
    }
  }
})

const data = [
  { lisoption: 'List 1 Options', selectitems: 'Select item(s) from List 1' },
  { lisoption: 'List 2 Options', selectitems: 'Select item(s) from List 2' },
  { optional: '*optional', Skip: 'Skip', lisoption: 'List 3 Options', selectitems: 'Select item(s) from List 3' },
  { optional: '*optional', Skip: 'Skip', lisoption: 'List 4 Options', selectitems: 'Select item(s) from List 4' }
];

const SelectOptionDetails = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((data) => (
        <SelectOptionDetail
          Skip={data.Skip}
          optional={data.optional}
          lisoption={data.lisoption}
          selectitems={data.selectitems}
        />
      ))}
    </div>
  );
}



export default SelectOptionDetails;