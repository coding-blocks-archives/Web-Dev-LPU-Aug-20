const initialState = {
  cards: {
    1: {
      id: 1,
      content: 'do something',
      done: false
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.card.id]: action.payload.card
        }
      }
    default:
      return state
  }
}
