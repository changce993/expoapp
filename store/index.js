import { createStore, combineReducers } from 'redux';
import { products, user } from './reducers';

const RootReducer = combineReducers({
  products,
  user
});

export default createStore(RootReducer);
