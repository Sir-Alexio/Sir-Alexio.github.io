import React from "react";
import Button from "@mui/material/Button";
import Counter from "../Counter/index";
import Styles from "./style";

interface ParentCounterProps {
  myCounters: number[];

  addNewCounter: () => void;
  removeFirstCounter: () => void;
  resetCounters: () => void;

  onIncrementCount: (index: number, value: number) => void;
  onDecrementCount: (index: number, value: number) => void;
  onResetCount: (index: number, value: number) => void;
}

const ParentCounter: React.FC<ParentCounterProps> = ({
  myCounters,
  addNewCounter,
  removeFirstCounter,
  resetCounters,
  onIncrementCount,
  onDecrementCount,
  onResetCount,
}) => {
  return (
    <div>
      <div className="counter-container">
        <div className="counter-block-parent">
          <Button
            style={Styles.buttonStyle}
            onClick={addNewCounter}
            variant="contained"
            color="primary"
          >
            New
          </Button>
          <Button
            style={Styles.buttonStyle}
            onClick={removeFirstCounter}
            variant="contained"
            color="primary"
          >
            Delete
          </Button>
          <Button
            style={Styles.buttonStyle}
            onClick={resetCounters}
            variant="contained"
            color="primary"
          >
            Reset
          </Button>
        </div>
      </div>
      <div>
        {myCounters.map((counter, index) => (
          <Counter
            key={index}
            index={index}
            currentCounter={counter}
            onIncrement={onIncrementCount}
            onDecrement={onDecrementCount}
            onReset={onResetCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentCounter;
