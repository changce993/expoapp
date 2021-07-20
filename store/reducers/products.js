import products from '../../mocks/products';
import { SET_PRODUCT } from '../types';

const INITIAL_STATE = {
  products,
  product: null
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
};

export default productsReducer;
