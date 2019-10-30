import React, {Component} from "react";
import TriggerPath from '../link';
import './refill.css';
import Card from './card';
import SetLog from "../../constants/set-log";

export default class Refill extends Component {
  constructor(props) {
    console.log('Refill props', props);
    super(props);
    this.state = props.refill;

    this.handleConsumableAdded = this.handleConsumableAdded.bind(this);
  }

  render() {
    return <div className='refillScreen'>

      <div className='container'>
        <div className='top_or_left'>
          <Card
            picture={(this.props.arabica >= this.props.arabicaMin ? "ArabicaColor.svg" : "Arabica.svg")}
            caption={'Arabica'}
            value={this.props.arabica}
            min={this.props.arabicaMin}
            max={this.props.arabicaMax}
            handleConsumableAdded={this.handleConsumableAdded}
          />
          <Card
            picture={(this.props.arabusta >= this.props.arabustaMin ? "ArabustaColor.svg" : "Arabusta.svg")}
            caption={'Arabusta'}
            value={this.props.arabusta}
            min={this.props.arabustaMin}
            max={this.props.arabustaMax}
            handleConsumableAdded={this.handleConsumableAdded}
          />
        </div>
        <div className='down_or_right'>
          <div className='Line first'>
            <Card
              picture={(this.props.cream >= this.props.creamMin ? "CreamColor.svg" : "Cream.svg")}
              caption={'Cream'}
              value={this.props.cream}
              min={this.props.creamMin}
              max={this.props.creamMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
            <Card
              picture={(this.props.sugar >= this.props.sugarMin ? "SugarColor.svg" : "Sugar.svg")}
              caption={'Sugar'}
              value={this.props.sugar}
              min={this.props.sugarMin}
              max={this.props.sugarMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
          </div>
          <div className='Line second'>
            <Card
              picture={(this.props.plasticCup >= this.props.plasticCupMin ? "PlasticCupColor.svg" : "PlasticCup.svg")}
              caption={'Plastic Cup'}
              value={this.props.plasticCup}
              min={this.props.plasticCupMin}
              max={this.props.plasticCupMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
            <Card
              picture={(this.state.paperCup >= this.props.paperCupMin ? "PaperCupColor.svg" : "PaperCup.svg")}
              caption={'Paper Cup'}
              value={this.props.paperCup}
              min={this.props.paperCupMin}
              max={this.props.paperCupMax}
              handleConsumableAdded={this.handleConsumableAdded}
            />
          </div>
        </div>
      </div>
      <div className='Bottom_or_Left'>
        <TriggerPath path={this.props.refillState.path}/>
        <div className='blackBox'>{
          this.props.arabica +
          this.props.arabusta +
          this.props.cream +
          this.props.sugar +
          this.props.plasticCup +
          this.props.paperCup
        }</div>
      </div>
    </div>
  };

  handleConsumableAdded(e) {
    let consumable = this._multiWordsToLowerCamelCase(e.currentTarget.innerText);
    if (this.state[`${consumable}`] < this.state[`${consumable}Max`]) {
      let obj = {};
      obj[`${consumable}`] = this.state[`${consumable}`] + 1
      this.setState(obj);
      SetLog(consumable + ' Consumable Added now =' + (this.state[`${consumable}`] + 1));
    }
    this._checkIfMinEnough();
  }

  /**
   * Convert MULTI UPPERCASE WORDS toLowerCamelCase
   *
   * @param string {String} MULTI UPPERCASE WORDS
   *
   * @return {String} newCamelCaseWord
   * */
  _multiWordsToLowerCamelCase(string) {
    let wordsArray = string.toLowerCase().replace(/ /g, ' ').split(' ');
    let newCamelCaseWord = wordsArray[0];
    for (let i = 1; i < wordsArray.length; i++) {
      newCamelCaseWord += `${wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1)}`;
    }

    return newCamelCaseWord
  }

  /**
   * Check if one of refill is not enough
   *
   * @return {Boolean}
   * */
  async  _checkIfMinEnough(){
    let checkArr = ["arabica", "arabusta", "cream", "paperCup", "plasticCup", "sugar"];
    for (let i=0; i<checkArr.length;i++){
      if (this.state[`${checkArr[i]}`] < this.state[`${checkArr[i]}Min`]){
        console.log(`${checkArr[i]} ********************`, this.state[`${checkArr[i]}`]);
        this.props.refillEnough(false);
      }
    }
    this.props.refillEnough(true);
  }
};




