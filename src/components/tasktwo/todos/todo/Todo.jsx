import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

const Todo = ({ title }) => (
  <div className="todo">
    {title}
  </div>
);


Todo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Todo;
