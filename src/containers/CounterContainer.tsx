import React, { useState } from 'react';
import ParentCounter from '../views/ParentCounter/index';

interface ICounterComponent {
  key: number;
  changedValue: number;
}

const CounterContainer: React.FC<ICounterComponent> = () => {

  const [counters, setCounters] = useState([0]);

  const addNewCounter = () => {
    setCounters((prevCounters)=>{
      const updatedCounters = prevCounters.map((item) => {
        return item % 2 === 0 && item !== 0 ? item + 1 : item;
      });
  
      return [...updatedCounters, 0];
    })
  };

  const removeFirstCounter = () => {
    if (counters.length > 1) {
      setCounters(() => {
        let updatedCounters = [...counters];

        updatedCounters.shift();

        updatedCounters = updatedCounters.map((item)=>{
          return item % 2 !== 0 && item !== 0 ? item - 1 : item;
        });

        return updatedCounters;
      });
    }
  };

  const resetCounters = () => {
    setCounters([0]);
  };

  const onIncrementClick = (index:number, value:number) => {
    setCounters((prevCounters)=>{
      prevCounters = [...counters];
      prevCounters[index] = value + 1;
      return prevCounters;
    })
  };

  const onDecrementClick = (index:number, value:number) => {
    setCounters((prevCounters)=>{

      if(counters.length>=1){

        prevCounters = [...counters];
        prevCounters[index] = value - 1;
        return prevCounters;

      }
      return counters;
    })
  };

  const onResetClick = (index:number, value:number) => {
    setCounters((prevCounters)=>{
      prevCounters = [...counters];
      prevCounters[index] = 0;
      return prevCounters;
    })
  };

  return (
    <div>
            <ParentCounter 
            myCounters={counters}
            addNewCounter = {addNewCounter}
            removeFirstCounter = {removeFirstCounter}
            resetCounters = {resetCounters}

            onIncrementCount={onIncrementClick}
            onDecrementCount={onDecrementClick}
            onResetCount={onResetClick}/>
        </div>
  )
};

export default CounterContainer;
