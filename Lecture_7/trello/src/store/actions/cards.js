import { v4 } from 'uuid';

export const addCard = (groupId, content) => {
  return {
    type: 'ADD_CARD',
    payload: {
      groupId,
      card: {
        id: v4(),
        content,
        done: false
      }
    }
  }
}