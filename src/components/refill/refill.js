import React, {Component} from "react";
import TriggerPath from '../link';
import './refill.css';
import Card from './card';
import SetLog from "../../constants/set-log";

export default class Refill extends Component {
  constructor(props) {
    super(props);
    this.handleAddConsumableClicked = this.handleAddConsumableClicked.bind(this);
  }

  render() {
    return <div className='refillScreen'>

      <div className='container'>
        <div className='top_or_left'>
          <div className={`${this.props.refillState.stockArabica >=
          this.props.refillState.stockArabicaMin? "":"notEnough"}`}>
          <Card
            color={this.props.refillState.stockArabica >=
            this.props.refillState.stockArabicaMin ? "secondary" : "default"}
            picture={this.props.refillState.stockArabica >=
            this.props.refillState.stockArabicaMin ? "ArabicaColor.svg" : "Arabica.svg"}
            caption={'Arabica'}
            value={this.props.refillState.stockArabica}
            min={this.props.refillState.stockArabicaMin}
            max={this.props.refillState.stockArabicaMax}
            handleAddConsumableClicked={this.handleAddConsumableClicked}
          />
          </div>
          <div className={`${this.props.refillState.stockRobusta >=
          this.props.refillState.stockRobustaMin? "":"notEnough"}`}>
          <Card
            color={this.props.refillState.stockRobusta >=
            this.props.refillState.stockRobustaMin ? "secondary" : "default"}
            picture={this.props.refillState.stockRobusta >=
            this.props.refillState.stockRobustaMin ? "RobustaColor.svg" : "Robusta.svg"}
            caption={'Robusta'}
            value={this.props.refillState.stockRobusta}
            min={this.props.refillState.stockRobustaMin}
            max={this.props.refillState.stockRobustaMax}
            handleAddConsumableClicked={this.handleAddConsumableClicked}
          />
          </div>
        </div>
        <div className='down_or_right'>
          <div className='Line first'>
            <div className={`${this.props.refillState.stockCream >=
            this.props.refillState.stockCreamMin? "":"notEnough"}`}>
            <Card
              color={this.props.refillState.stockCream >=
              this.props.refillState.stockCreamMin ? "secondary" : "default"}
              picture={this.props.refillState.stockCream >=
              this.props.refillState.stockCreamMin ? "CreamColor.svg" : "Cream.svg"}
              caption={'Cream'}
              value={this.props.refillState.stockCream}
              min={this.props.refillState.stockCreamMin}
              max={this.props.refillState.stockCreamMax}
              handleAddConsumableClicked={this.handleAddConsumableClicked}
            />
            </div>
            <div className={`${this.props.refillState.stockSugar >=
            this.props.refillState.stockSugarMin? "":"notEnough"}`}>
              <Card
                color={this.props.refillState.stockSugar >=
                this.props.refillState.stockSugarMin? "secondary":
                  this.props.refillState.stockSugar > 0 ? "primary" :"default"}
                picture={this.props.refillState.stockSugar >=
                this.props.refillState.stockSugarMin ? "SugarColor.svg" : "Sugar.svg"}
                caption={'Sugar'}
                value={this.props.refillState.stockSugar}
                min={this.props.refillState.stockSugarMin}
                max={this.props.refillState.stockSugarMax}
                handleAddConsumableClicked={this.handleAddConsumableClicked}
              />
            </div>

          </div>
          <div className='Line second'>
            <div className={`${this.props.refillState.stockPlasticCup >=
            this.props.refillState.stockPlasticCupMin? "":"notEnough"}`}>
            <Card
              color={this.props.refillState.stockPlasticCup >=
              this.props.refillState.stockPlasticCupMin ? "secondary" : "default"}
              picture={this.props.refillState.stockPlasticCup >=
              this.props.refillState.stockPlasticCupMin ? "PlasticCupColor.svg" : "PlasticCup.svg"}
              caption={'Plastic Cup'}
              value={this.props.refillState.stockPlasticCup}
              min={this.props.refillState.stockPlasticCupMin}
              max={this.props.refillState.stockPlasticCupMax}
              handleAddConsumableClicked={this.handleAddConsumableClicked}
            />
            </div>
            <div className={`${this.props.refillState.stockPaperCup >=
            this.props.refillState.stockPaperCupMin? "":"notEnough"}`}>
            <Card
              color={this.props.refillState.stockPaperCup >=
              this.props.refillState.stockPaperCupMin ? "secondary" : "default"}
              picture={this.props.refillState.stockPaperCup >=
              this.props.refillState.stockPaperCupMin ? "PaperCupColor.svg" : "PaperCup.svg"}
              caption={'Paper Cup'}
              value={this.props.refillState.stockPaperCup}
              min={this.props.refillState.stockPaperCupMin}
              max={this.props.refillState.stockPaperCupMax}
              handleAddConsumableClicked={this.handleAddConsumableClicked}
            />
            </div>
          </div>
        </div>
      </div>
      <div className='Bottom_or_Left' onClick={this.handleTriggerPathClicked}>
        <TriggerPath path={{
          ...this.props.refillState.path,
          color: this.props.isStockedEnough ? 'secondary' : 'primary'
        }}/>
        <div className='blackBox'>
          stock is filled up with {
          this.props.refillState.stockArabica +
          this.props.refillState.stockRobusta +
          this.props.refillState.stockCream +
          this.props.refillState.stockSugar +
          this.props.refillState.stockPlasticCup +
          this.props.refillState.stockPaperCup
        } pcs</div>
      </div>
    </div>
  };

  handleTriggerPathClicked() {
    SetLog('The Supplies door has closed')
  }

  handleAddConsumableClicked(e) {
    let consumable = `${this._capitalize(
      this._multiWordsToLowerCamelCase(e.currentTarget.innerText)
    )}`;
    if (this.props.refillState[`stock${consumable}`] <
      this.props.refillState[`stock${consumable}Max`]) {
      this.props[`add${consumable}`]();
      if (this.props.refillState[`stock${consumable}`] + 1 >=
        this.props.refillState[`stock${consumable}Min`]) {
        SetLog(' The ' + consumable + ' enough to Start. Now = ' +
          (this.props.refillState[`stock${consumable}`] + 1));
      } else {
        SetLog(consumable + ' Added. Now = ' +
          (this.props.refillState[`stock${consumable}`] + 1));
      }
    } else {
      SetLog(consumable + ' Reached maximum capacity. Now = ' +
        (this.props.refillState[`stock${consumable}`]));

    }
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
   * Capitalize string
   *
   * @param s {String}
   *
   * @return {String} Capitalized
   * */
  _capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


};




