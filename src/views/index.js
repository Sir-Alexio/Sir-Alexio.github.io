import React from 'react';
import Styles from './styles';
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';

const Counter = (props)=>{
    const {currentCounter,onIncrement,onDecrement,onReset} = props;

    return (
    <div>
        <div style={Styles.counterStyle}>Current count: {currentCounter}</div>
        <Button style={Styles.buttonStyle} onClick={onIncrement} variant="contained" color="primary">
            Increment
        </Button>
        <Button style={Styles.buttonStyle} onClick={onDecrement} variant="contained" color="primary">
            Decrement
        </Button>
        <Button style={Styles.buttonStyle} onClick={onReset} variant="contained" color="primary">
            Reset
        </Button>
    </div>
    )
};

export default Counter;

Counter.propTypes = {
    currentCounter: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onReset: PropTypes.func
}