import { createStore, combineReducers } from 'redux';

import cardsReducer from './reducers/cards';
import groupsReducer from './reducers/groups';

const reducers = combineReducers({
  cards: cardsReducer,
  groups: groupsReducer
})

const store = createStore(reducers)

export default store;
