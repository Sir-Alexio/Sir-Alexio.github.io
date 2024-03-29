import React, { useCallback, useState } from "react";
import ParentCounter from "../views/ParentCounter/index";

interface ICounterComponent {
  key: number;
  changedValue: number;
}

const CounterContainer: React.FC<ICounterComponent> = () => {
  const [counters, setCounters] = useState([0]);

  const addNewCounter = useCallback(() => {
    setCounters((prevCounters) => {
      const updatedCounters = prevCounters.map((item) => {
        return item % 2 === 0 ? item + 1 : item;
      });

      return [...updatedCounters, 0];
    });
  }, []);

  const removeFirstCounter = useCallback(() => {
    setCounters(() => {
      let updatedCounters = [...counters];
      if (counters.length > 1) {
        //Удаляем первый счетчик
        updatedCounters.shift();

        updatedCounters = updatedCounters.map((item) => {
          return item % 2 !== 0 && item !== 0 ? item - 1 : item;
        });
      }
      return updatedCounters;
    });
  }, []);

  const resetCounters = useCallback(() => {
    setCounters([0]);
  }, []);

  const onIncrementClick = useCallback((index: number, value: number) => {
    setCounters((prevCounters) => {
      const updatedCounters = [...prevCounters];
      updatedCounters[index] = value + 1;
      return updatedCounters;
    });
  }, []);

  const onDecrementClick = useCallback((index: number, value: number) => {
    setCounters((prevCounters) => {
      if (counters.length >= 1) {
        prevCounters = [...counters];
        prevCounters[index] = value - 1;
        return prevCounters;
      }
      return counters;
    });
  }, []);

  const onResetClick = useCallback((index: number) => {
    setCounters((prevCounters) => {
      const updatedCounters = [...prevCounters];
      updatedCounters[index] = 0;
      return updatedCounters;
    });
  }, []);

  return (
    <div>
      <ParentCounter
        myCounters={counters}
        addNewCounter={addNewCounter}
        removeFirstCounter={removeFirstCounter}
        resetCounters={resetCounters}
        onIncrementCount={onIncrementClick}
        onDecrementCount={onDecrementClick}
        onResetCount={onResetClick}
      />
    </div>
  );
};

export default CounterContainer;
