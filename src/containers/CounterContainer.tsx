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
  }, [counters]);

  const removeFirstCounter = useCallback(() => {
    if (counters.length > 1) {
      setCounters(() => {
        let updatedCounters = [...counters];

        updatedCounters.shift();

        updatedCounters = updatedCounters.map((item) => {
          return item % 2 !== 0 && item !== 0 ? item - 1 : item;
        });

        return updatedCounters;
      });
    }
  }, [counters]);

  const resetCounters = useCallback(() => {
    setCounters([0]);
  }, [counters]);

  const onIncrementClick = useCallback(
    (index: number, value: number) => {
      setCounters((prevCounters) => {
        const updatedCounters = [...prevCounters];
        updatedCounters[index] = value + 1;
        return updatedCounters;
      });
    },
    [counters]
  );

  const onDecrementClick = useCallback(
    (index: number, value: number) => {
      setCounters((prevCounters) => {
        if (counters.length >= 1) {
          prevCounters = [...counters];
          prevCounters[index] = value - 1;
          return prevCounters;
        }
        return counters;
      });
    },
    [counters]
  );

  const onResetClick = useCallback(
    (index: number) => {
      setCounters((prevCounters) => {
        const updatedCounters = [...prevCounters];
        updatedCounters[index] = 0;
        return updatedCounters;
      });
    },
    [counters]
  );

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
