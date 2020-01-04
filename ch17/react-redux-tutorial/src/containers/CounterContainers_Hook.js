import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

import Counter from '../components/Counter';

const CounterContainers_Hook = () => {
  const { number } = useSelector(store => store.counter);
  const dispatch = useDispatch();

  const handleOnIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const handleOnDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={handleOnIncrease}
      onDecrease={handleOnDecrease}
    />
  );
};

export default CounterContainers_Hook;
