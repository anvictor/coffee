import InitialState from '../constants/initialState';
import * as types from '../constants/actions';

export default function drinkReducer(state = InitialState.drink, action) {

  switch (action.type) {
    case types.CANCEL_ARABICA:        return {...state, orderedArabica: false};
    case types.CANCEL_CREAM:       return {...state, orderedCream: false};
    case types.CANCEL_PAPER_CUP:       return {...state, orderedPaperCup: false};
    case types.CANCEL_PLASTIC_CUP:       return {...state, orderedPlasticCup: false};
    case types.CANCEL_ROBUSTA:       return {...state, orderedRobusta: false};
    case types.CANCEL_SUGAR:       return {...state, orderedSugar: 0};
    case types.COOK_COFFEE:        return {...state, cooking: true};
    case types.COOKING_TIME_EXPIRES:       return {...state, cooking: false};
    case types.CUP_ENABLE:       return {...state, cupEnabled: true};
    case types.CUP_DISABLE:       return {...state, cupEnabled: false};
    case types.LESS_SUGAR:       return {...state, orderedSugar: state.orderedSugar - 1};
    case types.MORE_SUGAR:       return {...state, orderedSugar: state.orderedSugar + 1};
    case types.ORDER_ARABICA:        return {...state, orderedArabica: true};
    case types.ORDER_CREAM:        return {...state, orderedCream: true};
    case types.ORDER_PAPER_CUP:        return {...state, orderedPaperCup: true};
    case types.ORDER_PLASTIC_CUP:        return {...state, orderedPlasticCup: true};
    case types.ORDER_ROBUSTA:        return {...state, orderedRobusta: true};
    case types.ORDERED_ENOUGH:       return {...state, isOrderedEnough: true};
    case types.ORDERED_NOT_ENOUGH:       return {...state, isOrderedEnough: false};
    case types.PUT_COIN:       return {...state, coins: state.coins + 1};
    case types.TAKE_CUP:       return {...state, cupTaken: false};
    case types.STOCKED_ENOUGH:       return {...state, isStockedEnough: true};
    case types.STOCKED_NOT_ENOUGH:       return {...state, isStockedEnough: false};
    case types.USE_COIN:       return {...state, coins: state.coins - 1};


    default:
      return state
  }
}

