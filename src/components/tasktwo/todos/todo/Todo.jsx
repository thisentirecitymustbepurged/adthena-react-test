import React from 'react';
import './Todo.scss';

const Todos = ({ title }) => (
  <div className="todo">
    {title}
  </div>
);

export default Todos;
