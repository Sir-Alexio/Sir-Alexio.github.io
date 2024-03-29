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

const Counter: React.FC<CounterProps> = ({
  index,
  currentCounter,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  const handleIncrement = useCallback(() => {
    onIncrement(index, currentCounter);
  }, [onIncrement, index, currentCounter]);

  const handleDecrement = useCallback(() => {
    onDecrement(index, currentCounter);
  }, [onDecrement, index, currentCounter]);

  const handleReset = useCallback(() => {
    onReset(index, currentCounter);
  }, [onReset, index, currentCounter]);

  return (
    <div className="counter-container">
      <div className="counter-block">
        <div style={{ marginBottom: "10px" }}>Count: {currentCounter}</div>
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
