import React, { useState } from 'react';
import './User.scss';
import Todos from '@components/tasktwo/todos';

const Users = ({ username, email, website, todos }) => {
  const [collapsed, setCollapsed] = useState(true);
  const collapsedClassname = collapsed ? 'collapsed' : '';
  const className = `user ${collapsedClassname}`;

  return (
    <div className={className}>
      <div
        className="user__info"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div>{username}</div>
        <div>{email}</div>
        <div>{website}</div>
      </div>
      <div className="user__todos">
        {!collapsed && <Todos todos={todos} />}
      </div>
    </div>
  );
};

export default Users;
