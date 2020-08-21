import React from 'react';

import GroupList from './components/group-list';

export default () => {
  return <div className="container">
    <h1>My Trello</h1>
    <div className="mt-5">
      <GroupList />
    </div>
  </div>
}
