import { v4 } from 'uuid';

export const addGroup = (title) => {
  return {
    type: 'ADD_GROUP',
    payload: {
      id: v4(),
      title: title,
      cards: []
    }
  }
}
