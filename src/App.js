import React, {Component} from 'react';
import Refill from './components/refill/refill';
import Drink from "./components/drink/drink";
import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import {HashRouter, Redirect} from 'react-router-dom'
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
  start,
  stop,
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
  addCupPlastic,
  useCupPlastic,
  addCupPaper,
  useCupPaper,
  addSugar,
  useSugar
} from './actions/RefillActions';
import * as types from "./constants/actions";

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
    const start = this.props.startDispatch;
    const stop = this.props.stopDispatch;
    const stockedEnough = this.props.stockedEnoughDispatch;
    const stockedNotEnough = this.props.stockedNotEnoughDispatch;
    const addArabica = this.props.addArabicaDispatch;
    const useArabica = this.props.useArabicaDispatch;
    const addRobusta = this.props.addRobustaDispatch;
    const useRobusta = this.props.useRobustaDispatch;
    const addCream = this.props.addCreamDispatch;
    const useCream = this.props.useCreamDispatch;
    const addCupPlastic = this.props.addCupPlasticDispatch;
    const useCupPlastic = this.props.useCupPlasticDispatch;
    const addCupPaper = this.props.addCupPaperDispatch;
    const useCupPaper = this.props.useCupPaperDispatch;
    const addSugar = this.props.addSugarDispatch;
    const useSugar = this.props.useSugarDispatch;

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
                   start,
                   stop

                 )}
          />
          <Route path="/refill"
                 render={() => this.RefillCall(
                   this.props.store.refill,
                   addArabica,
                   addRobusta,
                   addCream,
                   addCupPlastic,
                   addCupPaper,
                   addSugar

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
    start,
    stop,
  ) {
    return <Drink
      drinkState  = {drinkState}
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
      start={start}
      stop={stop}

    />
  }

  RefillCall(
    refillState,
    addArabica,
    addRobusta,
    addCream,
    addCupPlastic,
    addCupPaper,
    addSugar,
  ) {
    return <Refill
      refillState = {refillState}
      addArabica={addArabica}
      addRobusta={addRobusta}
      addCream={addCream}
      addCupPlastic={addCupPlastic}
      addCupPaper={addCupPaper}
      addSugar={addSugar}
    />
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
  startDispatch: () => dispatch(start()),
  stopDispatch: () => dispatch(stop()),
  stockedEnoughDispatch: () => dispatch(stockedEnough()),
  stockedNotEnoughDispatch: () => dispatch(stockedNotEnough()),
  addArabicaDispatch: () => dispatch(addArabica()),
  useArabicaDispatch: () => dispatch(useArabica()),
  addRobustaDispatch: () => dispatch(addRobusta()),
  useRobustaDispatch: () => dispatch(useRobusta()),
  addCreamDispatch: () => dispatch(addCream()),
  useCreamDispatch: () => dispatch(useCream()),
  addCupPlasticDispatch: () => dispatch(addCupPlastic()),
  useCupPlasticDispatch: () => dispatch(useCupPlastic()),
  addCupPaperDispatch: () => dispatch(addCupPaper()),
  useCupPaperDispatch: () => dispatch(useCupPaper()),
  addSugarDispatch: () => dispatch(addSugar()),
  useSugarDispatch: () => dispatch(useSugar()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
