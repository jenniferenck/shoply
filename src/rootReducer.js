import { INCREMENT, DECREMENT } from './actionTypes';

const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case INCREMENT: {
    const item = {...action.payload, quantity: 1}
    
    return {
        state.cart.map()
          ...state,
          cart: [...state.cart, { ...item, quantity: item.quantity + 1 }]
        };
    }

    case DECREMENT:
      return { ...state, cart: state.cart - 1 };

    default:
      return state;
  }
}
// end

export default rootReducer;
