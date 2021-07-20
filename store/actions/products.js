import { SET_PRODUCT } from "../types";

export const setProduct = product => ({
  type: SET_PRODUCT,
  payload: product
});
