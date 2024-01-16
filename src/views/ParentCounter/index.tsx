import React from 'react';
import Styles from '../Counter/styles';
import Button from '@mui/material/Button';
import Counter from '../Counter/index';


interface CounterProps {
  myCounters: number[];

  addNewCounter :()=> void;
  removeFirstCounter:()=> void;
  resetCounters :()=> void;

  onIncrementCount :(index:number,value:number)=> void;
  onDecrementCount :(index:number, value:number)=> void;
  onResetCount :(index:number, value:number)=> void;
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
      <div>{props.myCounters.map((counter,index)=>(
        <Counter
            key={index}
            index={index}
            currentCounter={counter}
            onIncrement={props.onIncrementCount}
            onDecrement={props.onDecrementCount}
            onReset={props.onResetCount}
          />
      ))}
      </div>
    </div>
  );
};

export default ParentCounter;