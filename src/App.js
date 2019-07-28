import React, {Component} from 'react';
import Consumables from './components/consumables/consumables';
import Drink from "./components/drink/drink";
import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import { HashRouter, Redirect } from 'react-router-dom'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      drinkVisible: true,
      consumablesVisible: false
    };
  }

  render ()
  {
console.log('props');
    return (
      <div className="App">
        <h6 className='AppTitle'>Coffee Automat</h6>
        <HashRouter>
          <Redirect from="/" exact to="/drink" />
          <Route path="/drink" component={Drink}/>
          <Route path="/consumables" component={Consumables}/>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log('store', store)
  return {store
  }
};


export default connect(mapStateToProps)(App);
