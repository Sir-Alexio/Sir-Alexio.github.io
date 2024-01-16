
import React, { useState, useEffect } from 'react';
import CounterContainer from '../containers/CounterContainer';
import ParentCounter from '../views/ParentCounter/index';

interface MyCounterProps {
    key: number;
    changedValue : number;
  }

const PerentCounterContainer: React.FC = () =>{

    const [counters, setCounters] = useState<React.ReactElement<MyCounterProps>[]>([]);

    const [counterKey, setCounterKey] = useState(0);

    const addNewCounter = () => {
      setCounters(() => {
        return [
            ...counters,
            <CounterContainer
              key={counterKey}
              changedValue={0}
            />
          ]
      });
      setCounterKey(() => counterKey + 1);
    };
  
    const removeFirstCounter = () => {
      if (counters.length > 1) {
        setCounters(() => {
          const updatedCounters = [...counters];
          updatedCounters.shift();
          return updatedCounters;
        });
      }
    };
  
    const resetCounters = () => {
      setCounters([
        <CounterContainer
          key={counterKey}
          changedValue={0}
        />
      ]);
      setCounterKey(() => counterKey + 1);
    };

  
    if (counters.length === 0) {
      addNewCounter();
    }

    return (
        <div>
            {/* <ParentCounter 
            // myCounters={counters}
            addNewCounter = {addNewCounter}
            removeFirstCounter = {removeFirstCounter}
            resetCounters = {resetCounters}/> */}
        </div>
    )
}

export default PerentCounterContainer;