import React from 'react';

export default props => {
  const card = props.card

  return <div className="card mt-4">
    <div className="card-body">{card.content} ({card.done ? 'Done' : 'Undone'})</div>
  </div>
}
