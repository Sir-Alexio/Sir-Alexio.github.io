import React, { useState } from "react";
import ParentCounter from "views/ParentCounter";

const CounterContainer: React.FC = () => {
  //Определяем хук для счетчиков
  const [counters, setCounters] = useState([0]);

  //Добавление нового счетчика
  const addNewCounter = () => {
    //добавляем через хук
    setCounters((prevCounters) => {
      //Увеличиваем четные счетчики на единицу
      const updatedCounters = prevCounters.map((item) => {
        return item % 2 === 0 && item !== 0 ? item + 1 : item;
      });

      return [...updatedCounters, 0];
    });
  };

  //Удаляем первый счетчик
  const removeFirstCounter = () => {
    //Всегла должен оставаться один счетчик
    if (counters.length > 1) {
      setCounters(() => {
        let updatedCounters = [...counters];

        //Удаляем первый счетчик
        updatedCounters.shift();

        //Умельшаем все нечетные счетчики на единицу
        updatedCounters = updatedCounters.map((item) => {
          return item % 2 !== 0 && item !== 0 ? item - 1 : item;
        });

        return updatedCounters;
      });
    }
  };

  //Восстанавливаем первоначальное состояение
  const resetCounters = () => {
    setCounters([0]);
  };

  //Увеличиваем текущий счетчик на единицу
  const onIncrementClick = (index: number, value: number) => {
    setCounters((prevCounters) => {
      prevCounters = [...counters];
      prevCounters[index] = value + 1;
      return prevCounters;
    });
  };

  //Уменьшаем текущий счетчик на единицу
  const onDecrementClick = (index: number, value: number) => {
    setCounters((prevCounters) => {
      if (counters.length >= 1) {
        prevCounters = [...counters];
        prevCounters[index] = value - 1;
        return prevCounters;
      }
      return counters;
    });
  };

  //Обнуляем текущий счетчик
  const onResetClick = (index: number, value: number) => {
    setCounters((prevCounters) => {
      prevCounters = [...counters];
      prevCounters[index] = 0;
      return prevCounters;
    });
  };

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
