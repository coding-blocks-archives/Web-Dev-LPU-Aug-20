import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GroupListItem from './group-list-item';
import { addGroup } from '../store/actions/groups';

export default () => {
  const [groupTitle, setGroupTitle] = React.useState('')
  const groups = useSelector(state => Object.values(state.groups.groups))
  const dispatch = useDispatch()

  const onGroupAdd = () => {
    dispatch(addGroup(groupTitle))
    setGroupTitle('')
  }

  return <div className="d-flex" style={{ overflowX: 'auto' }}>
    {groups.map(group => <GroupListItem group={group} />)}
    <div>
      <input 
        placeholder="Group Title"
        value={groupTitle}
        onChange={(e) => {
          setGroupTitle(e.target.value)
        }}
      />
      <button className="btn btn-primary" onClick={onGroupAdd}>
        Add Group
      </button>
    </div>
  </div>
}




// Action
// type - 
// payload - 