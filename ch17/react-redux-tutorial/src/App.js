import React from 'react';
import CounterContainers from './containers/CounterContainers_Hook';
import TodosContainer from './containers/TodosContainer_Hook';

const App = () => {
  return (
    <div>
      <CounterContainers />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
