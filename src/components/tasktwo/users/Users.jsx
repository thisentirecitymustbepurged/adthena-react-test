import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import User from './user';
import './Users.scss';

const groupBy = (arr, key) => arr.reduce((acc, el) => {
  if (acc[el[key]]) {
    acc[el[key]].push(el);
  } else {
    acc[el[key]] = [el];
  }

  return acc;
}, {});

const mapTodos = (users, todosByUserId) => users.map(
  user => ({ ...user, todos: todosByUserId[user.id] })
);

const Users = ({ users, todos }) => {
  const [filter, setFilter] = useState('');
  const todosByUserId = useMemo(() => groupBy(todos, 'userId'), [todos]);
  const usersWithTodos = useMemo(() => mapTodos(users, todosByUserId), [todosByUserId, users]);
  const filteredUsers = useMemo(
    () => (filter ? usersWithTodos.filter(
      ({ username }) => username.toLowerCase().includes(filter.toLowerCase())
    ) : usersWithTodos), [filter, usersWithTodos]
  );

  return (
    <div className="users">
      <div className="users__header">
        <div>Click on a user to toggle visibility of todos</div>
        <div className="users__filter">
          <span>Filter users by name</span>
          <input
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Enter username"
          />
        </div>
      </div>
      {filteredUsers.map(user => <User {...{ ...user, key: user.id }} />)}
    </div>
  );
};


Users.propTypes = {
  users: PropTypes.array,
  todos: PropTypes.array,
};

Users.defaultProps = {
  users: [],
  todos: [],
};

export default Users;
