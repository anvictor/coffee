import React, { Component } from "react";
import TriggerPath from '../link';
import './consumables.css';
import Card from './card';
import SetLog from "../../constants/set-log";

export default class Consumables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Consumables",
      path: {url:'/drink', caption: 'DRINK'},
      arabica: 0,
      arabicaMin: 1,
      arabicaMax: 5,
      arabusta:0,
      arabustaMin: 1,
      arabustaMax: 5,
      cream: 0,
      creamMin: 1,
      creamMax: 5,
      sugar: 0,
      sugarMin: 4,
      sugarMax: 22,
      paperCup:0,
      paperCupMin: 1,
      paperCupMax: 5,
      plasticCup:0,
      plasticCupMin: 1,
      plasticCupMax: 5,
    };
    this.handleConsumableAdded = this.handleConsumableAdded.bind(this);
  }

  render() {
    return <div className='consumablesScreen'>

      <div className='container'>
        <div className='top_or_left'>
          <Card
            picture={(this.state.arabica >= this.state.arabicaMin ? "ArabicaColor.svg" : "Arabica.svg")}
            caption = {'Arabica'}
            value={this.state.arabica}
            min={this.state.arabicaMin}
            max={this.state.arabicaMax}
            handleConsumableAdded={this.handleConsumableAdded}
          />
          <Card
            picture={(this.state.arabusta >= this.state.arabustaMin ? "ArabustaColor.svg" : "Arabusta.svg")}
            caption = {'Arabusta'}
            value={this.state.arabusta}
            min={this.state.arabustaMin}
            max={this.state.arabustaMax}
            handleConsumableAdded={this.handleConsumableAdded}
          />
        </div>
        <div className='down_or_right'>
          <div className='Line first'>
            <Card
              picture={(this.state.cream >= this.state.creamMin ? "CreamColor.svg" : "Cream.svg")}
              caption = {'Cream'}
              value={this.state.cream}
              min={this.state.creamMin}
              max={this.state.creamMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
            <Card
              picture={(this.state.sugar >= this.state.sugarMin ? "SugarColor.svg" : "Sugar.svg")}
              caption = {'Sugar'}
              value={this.state.sugar}
              min={this.state.sugarMin}
              max={this.state.sugarMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
          </div>
          <div className='Line second'>
            <Card
              picture={(this.state.plasticCup >= this.state.plasticCupMin ? "PlasticCupColor.svg" : "PlasticCup.svg")}
              caption = {'Plastic Cup'}
              value={this.state.plasticCup}
              min={this.state.plasticCupMin}
              max={this.state.plasticCupMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
            <Card
              picture={(this.state.paperCup >= this.state.paperCupMin ? "PaperCupColor.svg" : "PaperCup.svg")}
              caption = {'Paper Cup'}
              value={this.state.paperCup}
              min={this.state.paperCupMin}
              max={this.state.paperCupMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
          </div>
        </div>
      </div>
      <div className='Bottom_or_Left'>
        <TriggerPath path={this.state.path}/>
        <div className='blackBox'>{
          this.state.arabica+
          this.state.arabusta+
          this.state.cream+
          this.state.sugar+
          this.state.plasticCup+
          this.state.paperCup
        }</div>
      </div>
    </div>
  };

  handleConsumableAdded(e){
    switch (e.currentTarget.innerText) {
      case 'ARABICA': {
        if (this.state.arabica<this.state.arabicaMax){
          this.setState({
            arabica: this.state.arabica + 1
          });
          SetLog(e.currentTarget.innerText + ' Consumable Added now =' + (this.state.arabica+1));
        }
      }
        break;
      case 'ARABUSTA':  {
        if (this.state.arabusta<this.state.arabustaMax){
          this.setState({
            arabusta: this.state.arabusta + 1
          });
          SetLog(e.currentTarget.innerText + ' Consumable Added now =' + (this.state.arabusta+1));
        }
      }
        break;
      case 'CREAM':  {
        if (this.state.cream<this.state.creamMax){
          this.setState({
            cream: this.state.cream + 1
          });
          SetLog(e.currentTarget.innerText + ' Consumable Added now =' + (this.state.cream+1));
        }
      }
        break;
      case 'SUGAR':  {
        if (this.state.sugar<this.state.sugarMax){
          this.setState({
            sugar: this.state.sugar + 1
          });
          SetLog(e.currentTarget.innerText + ' Consumable Added now =' + (this.state.sugar+1));
        }
      }
        break;
      case 'PLASTIC CUP':  {
        if (this.state.plasticCup<this.state.plasticCupMax){
          this.setState({
            plasticCup: this.state.plasticCup + 1
          });
          SetLog(e.currentTarget.innerText + ' Consumable Added now =' + (this.state.plasticCup+1));
        }
      }
        break;
      case 'PAPER CUP':  {
        if (this.state.paperCup<this.state.paperCupMax){
          this.setState({
            paperCup: this.state.paperCup + 1
          });
          SetLog(e.currentTarget.innerText + ' Consumable Added now =' + (this.state.paperCup+1));
        }
      }
        break;
      default:
        break;
    }
  }
};




