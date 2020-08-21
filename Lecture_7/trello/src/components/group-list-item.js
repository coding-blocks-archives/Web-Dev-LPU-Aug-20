import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoCard from './todo-card';
import { addCard } from '../store/actions/cards';

export default props => {
  const group = props.group
  const dispatch = useDispatch()
  const [cardContent, setCardContent] = React.useState('')
  const cards = useSelector(
    state => Object.values(state.cards.cards).filter(card => group.cards.indexOf(card.id) !== -1)
  )

  const onCardAdd = () => {
    dispatch(addCard(group.id, cardContent))
    setCardContent('')
  }

  return <div className="card mr-3 bg-secondary" style={{ minWidth: 300 }}>
    <div className="card-body">
      <span className="card-title">{group.title}</span>

      {cards.map(card => <TodoCard card={card} />)}

      <div className="mt-3">
        <input 
          placeholder="card content"
          value={cardContent}
          onChange={(e) => {
            setCardContent(e.target.value)
          }}
        />
        <button className="btn btn-primary" onClick={onCardAdd}>
          Add Card
        </button>
      </div>
    </div>
  </div>
}
