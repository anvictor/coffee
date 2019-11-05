import React, {Component} from 'react';
import Refill from './components/refill/refill';
import Drink from "./components/drink/drink";
import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import {HashRouter, Redirect} from 'react-router-dom';
import SetLog from './constants/set-log';
import {
  orderedEnough,
  orderedNotEnough,
  putCoin,
  useCoin,
  orderArabica,
  cancelArabica,
  orderRobusta,
  cancelRobusta,
  orderCream,
  cancelCream,
  orderPlasticCup,
  cancelPlasticCup,
  orderPaperCup,
  cancelPaperCup,
  lessSugar,
  moreSugar,
  cookCoffee,
  stopCoking,
} from './actions/DrinkActions';
import {
  stockedEnough,
  stockedNotEnough,
  addArabica,
  useArabica,
  addRobusta,
  useRobusta,
  addCream,
  useCream,
  addPlasticCup,
  usePlasticCup,
  addPaperCup,
  usePaperCup,
  addSugar,
  useSugar
} from './actions/RefillActions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orderedEnough = this.props.orderedEnoughDispatch;
    const orderedNotEnough = this.props.orderedNotEnoughDispatch;
    const putCoin = this.props.putCoinDispatch;
    const useCoin = this.props.useCoinDispatch;
    const orderArabica = this.props.orderArabicaDispatch;
    const cancelArabica = this.props.cancelArabicaDispatch;
    const orderRobusta = this.props.orderRobustaDispatch;
    const cancelRobusta = this.props.cancelRobustaDispatch;
    const orderCream = this.props.orderCreamDispatch;
    const cancelCream = this.props.cancelCreamDispatch;
    const orderPlasticCup = this.props.orderPlasticCupDispatch;
    const cancelPlasticCup = this.props.cancelPlasticCupDispatch;
    const orderPaperCup = this.props.orderPaperCupDispatch;
    const cancelPaperCup = this.props.cancelPaperCupDispatch;
    const lessSugar = this.props.lessSugarDispatch;
    const moreSugar = this.props.moreSugarDispatch;
    const cookCoffee = this.props.cookCoffeeDispatch;
    const stopCoking = this.props.stopCokingDispatch;
    const addArabica = this.props.addArabicaDispatch;
    const useArabica = this.props.useArabicaDispatch;
    const addRobusta = this.props.addRobustaDispatch;
    const useRobusta = this.props.useRobustaDispatch;
    const addCream = this.props.addCreamDispatch;
    const useCream = this.props.useCreamDispatch;
    const addPlasticCup = this.props.addPlasticCupDispatch;
    const usePlasticCup = this.props.usePlasticCupDispatch;
    const addPaperCup = this.props.addPaperCupDispatch;
    const usePaperCup = this.props.usePaperCupDispatch;
    const addSugar = this.props.addSugarDispatch;
    const useSugar = this.props.useSugarDispatch;
    this.isStoreEnough();
    const isStockedEnough = this.props.store.drink.isStockedEnough;
    return (
      <div className="App">
        <h6 className='AppTitle'>Coffee Automat</h6>
        <HashRouter>
          <Redirect from="/" exact to="/drink"/>
          <Route path="/drink"
                 render={() => this.DrinkCall(
                   this.props.store.drink,
                   orderedEnough,
                   orderedNotEnough,
                   putCoin,
                   useCoin,
                   orderArabica,
                   cancelArabica,
                   orderRobusta,
                   cancelRobusta,
                   orderCream,
                   cancelCream,
                   orderPlasticCup,
                   cancelPlasticCup,
                   orderPaperCup,
                   cancelPaperCup,
                   lessSugar,
                   moreSugar,
                   cookCoffee,
                   stopCoking,
                   useArabica,
                   useRobusta,
                   useCream,
                   usePlasticCup,
                   usePaperCup,
                   useSugar
                 )}
          />
          <Route path="/refill"
                 render={() => this.RefillCall(
                   this.props.store.refill,
                   addArabica,
                   addRobusta,
                   addCream,
                   addPlasticCup,
                   addPaperCup,
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
    orderedEnough,
    orderedNotEnough,
    putCoin,
    useCoin,
    orderArabica,
    cancelArabica,
    orderRobusta,
    cancelRobusta,
    orderCream,
    cancelCream,
    orderPlasticCup,
    cancelPlasticCup,
    orderPaperCup,
    cancelPaperCup,
    lessSugar,
    moreSugar,
    cookCoffee,
    stopCoking,
    useArabica,
    useRobusta,
    useCream,
    usePlasticCup,
    usePaperCup,
    useSugar
  ) {
    return <Drink
      drinkState={drinkState}
      orderedEnough={orderedEnough}
      orderedNotEnough={orderedNotEnough}
      putCoin={putCoin}
      useCoin={useCoin}
      orderArabica={orderArabica}
      cancelArabica={cancelArabica}
      orderRobusta={orderRobusta}
      cancelRobusta={cancelRobusta}
      orderCream={orderCream}
      cancelCream={cancelCream}
      orderPlasticCup={orderPlasticCup}
      cancelPlasticCup={cancelPlasticCup}
      orderPaperCup={orderPaperCup}
      cancelPaperCup={cancelPaperCup}
      lessSugar={lessSugar}
      moreSugar={moreSugar}
      cookCoffee={cookCoffee}
      stopCoking={stopCoking}
      useArabica={useArabica}
      useRobusta={useRobusta}
      useCream={useCream}
      usePlasticCup={usePlasticCup}
      usePaperCup={usePaperCup}
      useSugar={useSugar}

    />
  }

  RefillCall(
    refillState,
    addArabica,
    addRobusta,
    addCream,
    addPlasticCup,
    addPaperCup,
    addSugar,
    isStockedEnough
  ) {
    return <Refill
      refillState={refillState}
      addArabica={addArabica}
      addRobusta={addRobusta}
      addCream={addCream}
      addPlasticCup={addPlasticCup}
      addPaperCup={addPaperCup}
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
    ){
      if (!this.props.store.drink.isStockedEnough){
        SetLog('The stock filled in enough to get the coffee machine started');
        this.props.stockedEnoughDispatch();
      }
    }else{
      if (this.props.store.drink.isStockedEnough){
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
  orderedEnoughDispatch: () => dispatch(orderedEnough()),
  orderedNotEnoughDispatch: () => dispatch(orderedNotEnough()),
  putCoinDispatch: () => dispatch(putCoin()),
  useCoinDispatch: () => dispatch(useCoin()),
  orderArabicaDispatch: () => dispatch(orderArabica()),
  cancelArabicaDispatch: () => dispatch(cancelArabica()),
  orderRobustaDispatch: () => dispatch(orderRobusta()),
  cancelRobustaDispatch: () => dispatch(cancelRobusta()),
  orderCreamDispatch: () => dispatch(orderCream()),
  cancelCreamDispatch: () => dispatch(cancelCream()),
  orderPlasticCupDispatch: () => dispatch(orderPlasticCup()),
  cancelPlasticCupDispatch: () => dispatch(cancelPlasticCup()),
  orderPaperCupDispatch: () => dispatch(orderPaperCup()),
  cancelPaperCupDispatch: () => dispatch(cancelPaperCup()),
  lessSugarDispatch: () => dispatch(lessSugar()),
  moreSugarDispatch: () => dispatch(moreSugar()),
  cookCoffeeDispatch: () => dispatch(cookCoffee()),
  stopCokingDispatch: () => dispatch(stopCoking()),
  stockedEnoughDispatch: () => dispatch(stockedEnough()),
  stockedNotEnoughDispatch: () => dispatch(stockedNotEnough()),
  addArabicaDispatch: () => dispatch(addArabica()),
  useArabicaDispatch: () => dispatch(useArabica()),
  addRobustaDispatch: () => dispatch(addRobusta()),
  useRobustaDispatch: () => dispatch(useRobusta()),
  addCreamDispatch: () => dispatch(addCream()),
  useCreamDispatch: () => dispatch(useCream()),
  addPlasticCupDispatch: () => dispatch(addPlasticCup()),
  usePlasticCupDispatch: () => dispatch(usePlasticCup()),
  addPaperCupDispatch: () => dispatch(addPaperCup()),
  usePaperCupDispatch: () => dispatch(usePaperCup()),
  addSugarDispatch: () => dispatch(addSugar()),
  useSugarDispatch: () => dispatch(useSugar()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
