import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';
import './Todos.scss';

const Todos = ({ todos }) => {
  const { completed, uncompleted } = todos.reduce((acc, todo) => {
    if (todo.completed) {
      acc.completed.push(todo);
    } else {
      acc.uncompleted.push(todo);
    }

    return acc;
  }, { completed: [], uncompleted: [] });

  return (
    <div className="todos">
      <div className="todos__section">
        <div className="todos__section-title">
          Todo
        </div>
        {uncompleted ? uncompleted.map(todo => <Todo {...{ ...todo, key: todo.id }} />) : 'No todos.'}
      </div>
      <div className="todos__section">
        <div className="todos__section-title">
          Completed
        </div>
        {completed ? completed.map(todo => <Todo {...{ ...todo, key: todo.id }} />) : 'No todos.'}
      </div>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
