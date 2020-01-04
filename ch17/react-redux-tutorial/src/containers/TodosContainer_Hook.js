import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(store => store.todos);

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
};

export default TodosContainer;
