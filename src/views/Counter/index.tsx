import React from "react";
import { useCallback } from "react";
import Button from "@mui/material/Button";
import "./styles.css";

interface CounterProps {
  index: number;
  currentCounter: number;
  onIncrement: (index: number, value: number) => void;
  onDecrement: (index: number, value: number) => void;
  onReset: (index: number, value: number) => void;
}

const Counter: React.FC<CounterProps> = (props) => {
  const handleIncrement = useCallback(() => {
    props.onIncrement(props.index, props.currentCounter);
  }, [props.onIncrement, props.index, props.currentCounter]);

  const handleDecrement = useCallback(() => {
    props.onDecrement(props.index, props.currentCounter);
  }, [props.onDecrement, props.index, props.currentCounter]);

  const handleReset = useCallback(() => {
    props.onReset(props.index, props.currentCounter);
  }, [props.onReset, props.index, props.currentCounter]);

  return (
    <div className="counter-container">
      <div className="counter-block">
        <div style={{ marginBottom: "10px" }}>
          Count: {props.currentCounter}
        </div>
        <Button
          className="button-style"
          onClick={handleIncrement}
          variant="contained"
          color="primary"
        >
          Increment
        </Button>
        <Button
          className="button-style"
          onClick={handleDecrement}
          variant="contained"
          color="primary"
        >
          Decrement
        </Button>
        <Button
          className="button-style"
          onClick={handleReset}
          variant="contained"
          color="primary"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
