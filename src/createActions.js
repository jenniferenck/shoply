import { INCREMENT, DECREMENT } from './actionTypes';

export function increment(props) {
  return {
    type: INCREMENT,
    payload: props
  };
}

export function decrement(props) {
  return {
    type: DECREMENT,
    payload: props
  };
}
