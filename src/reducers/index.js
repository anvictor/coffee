import {combineReducers} from 'redux';
import drinkReducer from "./drink";
import refillReducer from "./refill";

export default combineReducers({
  drink : drinkReducer,
  refill: refillReducer
})
