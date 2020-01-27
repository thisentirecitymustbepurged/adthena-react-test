import React from 'react';
import Loader from '@components/common/Loader';
import api from './api';
import Users from './users';

const { getTodos, getUsers } = api;

class TaskTwo extends React.Component {
  state = {}

  render() {
    // throw new Error();

    return (
      <div className="task">
        <h1>Task Two: Todos</h1>
        <div className="content">
          <Loader async={{ todos: getTodos, users: getUsers }}>
            <Users />
          </Loader>
        </div>
      </div>
    );
  }
}

export default TaskTwo;
