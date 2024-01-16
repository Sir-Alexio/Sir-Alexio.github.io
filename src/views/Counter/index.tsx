import React from 'react';
import Styles from './styles';
import Button from '@mui/material/Button';

interface CounterProps {
    index:number;
    currentCounter: number;
    onIncrement: (index:number, value:number) => void;
    onDecrement: (index:number, value:number) => void;
    onReset: (index:number, value:number) => void;
  }

  const Counter: React.FC<CounterProps> = (props) => {
    return (
    <div>
        <div style={{ marginBottom: '10px' }}>Current count: {props.currentCounter}</div>
        <Button style={Styles.buttonStyle} onClick={()=>props.onIncrement(props.index, props.currentCounter)} variant="contained" color="primary">
            Increment
        </Button>
        <Button style={Styles.buttonStyle} onClick={()=>props.onDecrement(props.index, props.currentCounter)} variant="contained" color="primary">
            Decrement
        </Button>
        <Button style={Styles.buttonStyle} onClick={()=>props.onReset(props.index, props.currentCounter)} variant="contained" color="primary">
            Reset
        </Button>
    </div>
    )
};

export default Counter;