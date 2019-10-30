import InitialState from '../constants/initialState';
import * as types from '../constants/actions';

export default function drinkReducer(state = InitialState.drink, action) {

  switch (action.type) {
    case types.ORDERED_ENOUGH:
      return {...state, orderedEnough: true}
    case types.ORDERED_NOT_ENOUGH:
      return {...state, orderedEnough: false}
    case types.PUT_COIN:
      return {...state, putCoin: state.putCoin + 1}
    case types.USE_COIN:
      return {...state, useCoin: state.useCoin - 1}
    case types.ORDER_ARABICA:
      return {...state, orderedArabica: state.orderedArabica + 1}
    case types.CANCEL_ARABICA:
      return {...state, orderedArabica: 0}
    case types.ORDER_ROBUSTA:
      return {...state, orderedRobusta: state.orderedRobusta + 1}
    case types.CANCEL_ROBUSTA:
      return {...state, orderedRobusta: 0}
    case types.ORDER_CREAM:
      return {...state, orderedCream: state.orderedCream + 1}
    case types.CANCEL_CREAM:
      return {...state, orderedCream: 0}
    case types.ORDER_PLASTIC_CUP:
      return {...state, orderedPlasticCup: state.orderedPlasticCup + 1}
    case types.CANCEL_PLASTIC_CUP:
      return {...state, orderedPlasticCup: 0}
    case types.ORDER_PAPER_CUP:
      return {...state, orderedPaperCup: state.orderedPaperCup + 1}
    case types.CANCEL_PAPER_CUP:
      return {...state, orderedPaperCup: 0}
    case types.LESS_SUGAR:
      return {...state, orderedSugar: state.orderedSugar - 1}
    case types.MORE_SUGAR:
      return {...state, orderedSugar: state.orderedSugar + 1}
    case types.START:
      return {...state, preparing: true}
    case types.STOP:
      return {...state, preparing: false}

    default:
      return state
  }
}

