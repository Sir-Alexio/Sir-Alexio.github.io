import React from 'react';
import Button from '@mui/material/Button';
import '../Counter/styles.css'

interface CounterProps {
    index:number;
    currentCounter: number;
    onIncrement: (index:number, value:number) => void;
    onDecrement: (index:number, value:number) => void;
    onReset: (index:number, value:number) => void;
  }

  const Counter: React.FC<CounterProps> = (props) => {
    return (
      <div className='counter-container'>
          <div className="counter-block">
            <div style={{ marginBottom: '10px' }}>Сount: {props.currentCounter}</div>
            <Button  className="button-style" onClick={() => props.onIncrement(props.index, props.currentCounter)} variant="contained" color="primary">
              Increment
            </Button>
            <Button  className="button-style" onClick={() => props.onDecrement(props.index, props.currentCounter)} variant="contained" color="primary">
              Decrement
            </Button>
            <Button  className="button-style" onClick={() => props.onReset(props.index, props.currentCounter)} variant="contained" color="primary">
              Reset
            </Button>
          </div>
          </div>
      );
};

export default Counter;