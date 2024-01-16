import React, { useState } from 'react';
import Counter from '../views/Counter/index';

interface ICounterComponent {
  key: number;
  changedValue: number;
}

const CounterContainer: React.FC<ICounterComponent> = (props) => {

  const [currentCounter, setCurrentCounter] = useState(props.changedValue);

  const onIncrementClick = () => {
    setCurrentCounter((prevCounter) => prevCounter + 1);
  };

  const onDecrementClick = () => {
    setCurrentCounter((prevCounter) => prevCounter - 1);
  };

  const onResetClick = () => {
    setCurrentCounter(0);
  };

  return (
    <Counter
      currentCounter={currentCounter}
      onIncrement={onIncrementClick}
      onDecrement={onDecrementClick}
      onReset={onResetClick}
    />
  );
};

export default CounterContainer;
