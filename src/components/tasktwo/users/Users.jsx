import React, { useMemo } from 'react';
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
  const todosByUserId = useMemo(() => groupBy(todos, 'userId'), [todos]);
  const usersWithTodos = useMemo(() => mapTodos(users, todosByUserId), [todosByUserId, users]);

  return (
    <div className="users">
      <div className="users__header">
        <span>Click on a user to toggle visibility of todos</span>
      </div>
      {usersWithTodos.map(user => <User {...{ ...user, key: user.id }} />)}
    </div>
  );
};

export default Users;
