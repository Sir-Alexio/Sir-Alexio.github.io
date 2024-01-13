import React from 'react';
import Styles from './styles';
import Button from '@mui/material/Button';

interface CounterProps {
    currentCounter: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
  }

  const Counter: React.FC<CounterProps> = (props) => {
    return (
    <div>
        <div style={{ marginBottom: '10px' }}>Current count: {props.currentCounter}</div>
        <Button style={Styles.buttonStyle} onClick={props.onIncrement} variant="contained" color="primary">
            Increment
        </Button>
        <Button style={Styles.buttonStyle} onClick={props.onDecrement} variant="contained" color="primary">
            Decrement
        </Button>
        <Button style={Styles.buttonStyle} onClick={props.onReset} variant="contained" color="primary">
            Reset
        </Button>
    </div>
    )
};

export default Counter;