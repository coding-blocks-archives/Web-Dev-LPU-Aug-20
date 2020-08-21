const initialState = {
  groups: {
    1: {
      id: 1,
      title: 'sometitle',
      cards: [1]
    }
  }
}

// Reducers are pure functions which take previous state
// and action as an argument and returns us the new state
export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CARD':
      const group = state.groups[action.payload.groupId]
      return {
        ...state,
        groups: {
          ...state.groups,
          [group.id]: {
            ...group,
            cards: [
              ...group.cards,
              action.payload.card.id
            ]
          }
        }
      }
    case 'ADD_GROUP':
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state
  }
}
