import React from 'react';
import './Todo.scss';

const Todo = ({ title }) => (
  <div className="todo">
    {title}
  </div>
);

export default Todo;
