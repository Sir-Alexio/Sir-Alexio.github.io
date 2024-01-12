import React from 'react';
import Styles from './styles';
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';


const Counter = (props)=>{
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

Counter.propTypes = {
    props: PropTypes.object
}