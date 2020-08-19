import { createStore } from 'redux'

const initialState = {
  products: [
    {
      name: 'Apple',
      price: 500
    },
    {
      name: 'Apple',
      price: 500
    },
    {
      name: 'Apple',
      price: 500
    },
    {
      name: 'Apple',
      price: 500
    }
  ],
  cart: []
}

// {
//   type: 'ADD_TO_CART',
//   payload: {
//     name: 'Apple',
//     price: 500
//   }
// }
const reducer = (state = initialState, action) => {
  // if (action.type === 'ADD_TO_CART') {
  //   return {
  //     ...state,
  //     cart: [
  //       ...state.cart,
  //       action.product
  //     ]
  //   }
  // }
  // return state
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          action.product
        ]
      }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;
