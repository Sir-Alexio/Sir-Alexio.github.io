import React from 'react';
import Styles from '../Counter/styles';
import Button from '@mui/material/Button';

interface MyCounterProps {
  key: number;
  changedValue : number;
}

interface CounterProps {
  myCounters:React.ReactElement<MyCounterProps>[];
  addNewCounter :()=> void;
  removeFirstCounter:()=> void;
  resetCounters :()=> void;
}

const ParentCounter: React.FC<CounterProps> = (props) => { 
  return (
    <div>
      <Button style={Styles.buttonStyle} onClick={props.addNewCounter} variant="contained" color="primary">
        New
      </Button>
      <Button style={Styles.buttonStyle} onClick={props.removeFirstCounter} variant="contained" color="primary">
        Delete
      </Button>
      <Button style={Styles.buttonStyle} onClick={props.resetCounters} variant="contained" color="primary">
        Reset
      </Button>
      <div>{props.myCounters}</div>
    </div>
  );
};

export default ParentCounter;