import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todos from '@components/tasktwo/todos';
import './User.scss';

const User = ({ username, email, website, todos }) => {
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

User.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
};

export default User;
