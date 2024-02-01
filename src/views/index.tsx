import React from 'react';
import Styles from './styles';
import Button from '@mui/material/Button';
import {ICounterContainer} from '../Interfaces/index';

  const Counter: React.FC<ICounterContainer> = (props) => {
    const {state,onIncrementClick,onDecrementClick,onResetClick} = props;
    return (
    <div>
        <div style={Styles.counterStyle}>Current count: {state.currentCounter}</div>
        <Button style={Styles.buttonStyle} onClick={onIncrementClick} variant="contained" color="primary">
            Increment
        </Button>
        <Button style={Styles.buttonStyle} onClick={onDecrementClick} variant="contained" color="primary">
            Decrement
        </Button>
        <Button style={Styles.buttonStyle} onClick={onResetClick} variant="contained" color="primary">
            Reset
        </Button>
    </div>
    )
};

export default Counter;