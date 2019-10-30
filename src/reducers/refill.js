
import InitialState from '../constants/initialState';
import * as types from '../constants/actions';

export default function refillReducer(state = InitialState.drink, action) {

  switch (action.type) {

    case types.ADD_ARABICA: return {...state, stockArabica: state.stockArabica + 1}
    case types.ADD_ROBUSTA: return {...state, stockRobusta: state.stockRobusta + 1}
    case types.ADD_CREAM: return {...state, stockCream: state.stockCream + 1}
    case types.ADD_CUP_PLASTIC: return {...state, stockPlasticCup: state.stockPlasticCup + 1}
    case types.ADD_CUP_PAPER: return {...state, stockPaperCup: state.stockPaperCup + 1}
    case types.ADD_SUGAR: return {...state, stockSugar: state.stockSugar + 1}

    default:
      return state
  }
}

