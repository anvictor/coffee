import React, {Component} from 'react';
import Refill from './components/refill/refill';
import Drink from "./components/drink/drink";
import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import {HashRouter, Redirect} from 'react-router-dom';
import SetLog from './constants/set-log';

import {
  cancelArabica,
  cancelCream,
  cancelPaperCup,
  cancelPlasticCup,
  cancelRobusta,
  cancelSugar,
  cookCoffee,
  cookingTimeExpires,
  cupEnable,
  cupDisable,
  lessSugar,
  moreSugar,
  orderArabica,
  orderCream,
  orderedEnough,
  orderedNotEnough,
  orderPaperCup,
  orderPlasticCup,
  orderRobusta,
  putCoin,
  takeCup,
  useCoin,
} from './actions/DrinkActions';

import {
  addArabica,
  addCream,
  addPaperCup,
  addPlasticCup,
  addRobusta,
  addSugar,
  stockedEnough,
  stockedNotEnough,
  useArabica,
  useCream,
  usePaperCup,
  usePlasticCup,
  useRobusta,
  useSugar,
} from './actions/RefillActions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addArabica = this.props.addArabicaDispatch;
    const addCream = this.props.addCreamDispatch;
    const addPaperCup = this.props.addPaperCupDispatch;
    const addPlasticCup = this.props.addPlasticCupDispatch;
    const addRobusta = this.props.addRobustaDispatch;
    const addSugar = this.props.addSugarDispatch;
    const cancelArabica = this.props.cancelArabicaDispatch;
    const cancelCream = this.props.cancelCreamDispatch;
    const cancelPaperCup = this.props.cancelPaperCupDispatch;
    const cancelPlasticCup = this.props.cancelPlasticCupDispatch;
    const cancelRobusta = this.props.cancelRobustaDispatch;
    const cancelSugar = this.props.cancelSugarDispatch;
    const cookCoffee = this.props.cookCoffeeDispatch;
    const cookingTimeExpires = this.props.cookingTimeExpiresDispatch;
    const cupEnable = this.props.cupEnableDispatch;
    const cupDisable = this.props.cupDisableDispatch;
    const isStockedEnough = this.props.store.drink.isStockedEnough;
    const lessSugar = this.props.lessSugarDispatch;
    const moreSugar = this.props.moreSugarDispatch;
    const orderArabica = this.props.orderArabicaDispatch;
    const orderCream = this.props.orderCreamDispatch;
    const orderedNotEnough = this.props.orderedNotEnoughDispatch;
    const orderPaperCup = this.props.orderPaperCupDispatch;
    const orderPlasticCup = this.props.orderPlasticCupDispatch;
    const orderRobusta = this.props.orderRobustaDispatch;
    const putCoin = this.props.putCoinDispatch;
    const takeCup = this.props.takeCupDispatch;
    const useArabica = this.props.useArabicaDispatch;
    const useCoin = this.props.useCoinDispatch;
    const useCream = this.props.useCreamDispatch;
    const usePaperCup = this.props.usePaperCupDispatch;
    const usePlasticCup = this.props.usePlasticCupDispatch;
    const useRobusta = this.props.useRobustaDispatch;
    const useSugar = this.props.useSugarDispatch;
    const orderedEnough = this.props.orderedEnoughDispatch;
    this.isStoreEnough();
    return (
      <div className="App">
        <h6 className='AppTitle'>Coffee Automat</h6>
        <HashRouter>
          <Redirect from="/" exact to="/drink"/>
          <Route path="/drink"
                 render={() => this.DrinkCall(
                   this.props.store.drink,
                   cancelArabica,
                   cancelCream,
                   cancelPaperCup,
                   cancelPlasticCup,
                   cancelRobusta,
                   cancelSugar,
                   cookCoffee,
                   cookingTimeExpires,
                   cupEnable,
                   cupDisable,
                   lessSugar,
                   moreSugar,
                   orderArabica,
                   orderCream,
                   orderedEnough,
                   orderedNotEnough,
                   orderPaperCup,
                   orderPlasticCup,
                   orderRobusta,
                   putCoin,
                   takeCup,
                   useArabica,
                   useCoin,
                   useCream,
                   usePaperCup,
                   usePlasticCup,
                   useRobusta,
                   useSugar
                 )}
          />
          <Route path="/refill"
                 render={() => this.RefillCall(
                   this.props.store.refill,
                   addArabica,
                   addCream,
                   addPaperCup,
                   addPlasticCup,
                   addRobusta,
                   addSugar,
                   isStockedEnough
                 )}
          />
        </HashRouter>
      </div>
    );
  }

  DrinkCall(
    drinkState,
    cancelArabica,
    cancelCream,
    cancelPaperCup,
    cancelPlasticCup,
    cancelRobusta,
    cancelSugar,
    cookCoffee,
    cookingTimeExpires,
    cupEnable,
    cupDisable,
    lessSugar,
    moreSugar,
    orderArabica,
    orderCream,
    orderedEnough,
    orderedNotEnough,
    orderPaperCup,
    orderPlasticCup,
    orderRobusta,
    putCoin,
    takeCup,
    useArabica,
    useCoin,
    useCream,
    usePaperCup,
    usePlasticCup,
    useRobusta,
    useSugar
  ) {
    return <Drink
      drinkState={drinkState}
      cancelArabica={cancelArabica}
      cancelCream={cancelCream}
      cancelPaperCup={cancelPaperCup}
      cancelPlasticCup={cancelPlasticCup}
      cancelRobusta={cancelRobusta}
      cancelSugar={cancelSugar}
      cookCoffee={cookCoffee}
      cookingTimeExpires={cookingTimeExpires}
      cupEnable={cupEnable}
      cupDisable={cupDisable}
      lessSugar={lessSugar}
      moreSugar={moreSugar}
      orderArabica={orderArabica}
      orderCream={orderCream}
      orderedEnough={orderedEnough}
      orderedNotEnough={orderedNotEnough}
      orderPaperCup={orderPaperCup}
      orderPlasticCup={orderPlasticCup}
      orderRobusta={orderRobusta}
      putCoin={putCoin}
      takeCup={takeCup}
      useArabica={useArabica}
      useCoin={useCoin}
      useCream={useCream}
      usePaperCup={usePaperCup}
      usePlasticCup={usePlasticCup}
      useRobusta={useRobusta}
      useSugar={useSugar}
    />
  }

  RefillCall(
    refillState,
    addArabica,
    addCream,
    addPaperCup,
    addPlasticCup,
    addRobusta,
    addSugar,
    isStockedEnough
  ) {
    return <Refill
      refillState={refillState}
      addArabica={addArabica}
      addCream={addCream}
      addPaperCup={addPaperCup}
      addPlasticCup={addPlasticCup}
      addRobusta={addRobusta}
      addSugar={addSugar}
      isStockedEnough={isStockedEnough}
    />
  }

  isStoreEnough() {
    if (
      this.props.store.refill.stockArabica >= this.props.store.refill.stockArabicaMin &&
      this.props.store.refill.stockRobusta >= this.props.store.refill.stockRobustaMin &&
      this.props.store.refill.stockCream >= this.props.store.refill.stockCreamMin &&
      this.props.store.refill.stockSugar >= this.props.store.refill.stockSugarMin &&
      this.props.store.refill.stockPaperCup >= this.props.store.refill.stockPaperCupMin &&
      this.props.store.refill.stockPlasticCup >= this.props.store.refill.stockPlasticCupMin
    ) {
      if (!this.props.store.drink.isStockedEnough) {
        SetLog('The stock filled enough to get the coffee machine started');
        this.props.stockedEnoughDispatch();
      }
    } else {
      if (this.props.store.drink.isStockedEnough) {
        SetLog('The stock filled in NOT enough to get the coffee machine started');
        this.props.stockedNotEnoughDispatch();
      }
    }
  }
}

const mapStateToProps = store => {
  return {store}
};
const mapDispatchToProps = dispatch => ({

  addArabicaDispatch: () => dispatch(addArabica()),
  addCreamDispatch: () => dispatch(addCream()),
  addPaperCupDispatch: () => dispatch(addPaperCup()),
  addPlasticCupDispatch: () => dispatch(addPlasticCup()),
  addRobustaDispatch: () => dispatch(addRobusta()),
  addSugarDispatch: () => dispatch(addSugar()),
  cancelArabicaDispatch: () => dispatch(cancelArabica()),
  cancelCreamDispatch: () => dispatch(cancelCream()),
  cancelPaperCupDispatch: () => dispatch(cancelPaperCup()),
  cancelPlasticCupDispatch: () => dispatch(cancelPlasticCup()),
  cancelRobustaDispatch: () => dispatch(cancelRobusta()),
  cancelSugarDispatch: () => dispatch(cancelSugar()),
  cookCoffeeDispatch: () => dispatch(cookCoffee()),
  cookingTimeExpiresDispatch: () => dispatch(cookingTimeExpires()),
  cupEnableDispatch: () => dispatch(cupEnable()),
  cupDisableDispatch: () => dispatch(cupDisable()),
  lessSugarDispatch: () => dispatch(lessSugar()),
  moreSugarDispatch: () => dispatch(moreSugar()),
  orderArabicaDispatch: () => dispatch(orderArabica()),
  orderCreamDispatch: () => dispatch(orderCream()),
  orderedEnoughDispatch: () => dispatch(orderedEnough()),
  orderedNotEnoughDispatch: () => dispatch(orderedNotEnough()),
  orderPaperCupDispatch: () => dispatch(orderPaperCup()),
  orderPlasticCupDispatch: () => dispatch(orderPlasticCup()),
  orderRobustaDispatch: () => dispatch(orderRobusta()),
  putCoinDispatch: () => dispatch(putCoin()),
  takeCupDispatch: () => dispatch(takeCup()),
  stockedEnoughDispatch: () => dispatch(stockedEnough()),
  stockedNotEnoughDispatch: () => dispatch(stockedNotEnough()),
  useArabicaDispatch: () => dispatch(useArabica()),
  useCoinDispatch: () => dispatch(useCoin()),
  useCreamDispatch: () => dispatch(useCream()),
  usePaperCupDispatch: () => dispatch(usePaperCup()),
  usePlasticCupDispatch: () => dispatch(usePlasticCup()),
  useRobustaDispatch: () => dispatch(useRobusta()),
  useSugarDispatch: () => dispatch(useSugar()),

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
