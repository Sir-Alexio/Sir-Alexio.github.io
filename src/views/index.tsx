import React from "react";
import Styles from "./styles";
import Button from "@mui/material/Button";

interface ICounterContainer {
  currentCounter: number;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  onResetClick: () => void;
}

const Counter: React.FC<ICounterContainer> = ({
  currentCounter,
  onIncrementClick,
  onDecrementClick,
  onResetClick,
}) => {
  return (
    <div>
      <div style={Styles.counterStyle}>Current count: {currentCounter}</div>
      <Button
        style={Styles.buttonStyle}
        onClick={onIncrementClick}
        variant="contained"
        color="primary"
      >
        Increment
      </Button>
      <Button
        style={Styles.buttonStyle}
        onClick={onDecrementClick}
        variant="contained"
        color="primary"
      >
        Decrement
      </Button>
      <Button
        style={Styles.buttonStyle}
        onClick={onResetClick}
        variant="contained"
        color="primary"
      >
        Reset
      </Button>
    </div>
  );
};

export default Counter;
