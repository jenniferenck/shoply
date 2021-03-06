import { INCREMENT, DECREMENT } from './actionTypes';

const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case INCREMENT: {
      const item = state.cart.find(i => i.id === action.payload.id);

      if (item) {
        return {
          ...state,
          cart: state.cart.map(i => {
            if (i.id === item.id) {
              return { ...i, quantity: i.quantity + 1 };
            }
            return i;
          })
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    }

    case DECREMENT:
      const item = state.cart.find(i => i.id === action.payload.id);

      if (item && item.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id)
        };
      } else if (item && item.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map(i => {
            if (i.id === item.id) {
              return { ...i, quantity: i.quantity - 1 };
            }
            return i;
          })
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
// end

export default rootReducer;
