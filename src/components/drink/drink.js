import React, {Component} from "react";
import TriggerPath from '../link';
import './drink.css';
import Button from "@material-ui/core/Button/Button";
import Badge from '@material-ui/core/Badge';
import SetLog from '../../constants/set-log';
import Fab from "@material-ui/core/Fab/Fab";

export default class Drink extends Component {
  constructor(props) {
    super(props);
    this.handleArabicaSelected = this.handleArabicaSelected.bind(this);
    this.handleRobustaSelected = this.handleRobustaSelected.bind(this);
    this.handleCreamToggled = this.handleCreamToggled.bind(this);
    this.handleCupPlasticSelected = this.handleCupPlasticSelected.bind(this);
    this.handleCupPaperSelected = this.handleCupPaperSelected.bind(this);
    this.handleLessSugarClicked = this.handleLessSugarClicked.bind(this);
    this.handleMoreSugarClicked = this.handleMoreSugarClicked.bind(this);
    this.handleCoinInserted = this.handleCoinInserted.bind(this);
    this.handleStartClicked = this.handleStartClicked.bind(this);
    this._isOrderedEnough = this._isOrderedEnough.bind(this);
  }

  render() {
    this._isOrderedEnough();
    this._prepare();
    return <div className={`drinkScreen`}>
      <div className={`triggerPath ${this.props.drinkState.cupEnabled ||
      this.props.drinkState.cooking?'cover':''}`} onClick={this.handleTriggerPathClicked}>
        <TriggerPath path={{
          ...this.props.drinkState.path,
          color: this.props.drinkState.isStockedEnough ? 'primary' : 'secondary',
          disabled: this.props.drinkState.cupEnabled || this.props.drinkState.cooking
        }}/>
      </div>
      <div className='drinkInterface'>
        <div className='coinCupPlace'>
          <div onClick={this.handleCoinInserted} className='coinPlace'>
            <Badge color="primary" badgeContent={this.props.drinkState.coins}
                   className='coinBadge'>
              <img className='Coin' src="./assets/img/Coin.svg" alt="INSERT COIN"/>
            </Badge>
            <img className='CoinAcceptor' src="./assets/img/CoinAcceptor.svg" alt="INSERT COIN"/>
          </div>


          <div className='start_cupPlace'>
            <Button className='startBtn'
                    disabled={!(this.props.drinkState.isStockedEnough &&
                      this.props.drinkState.isOrderedEnough)}
                    onClick={this.handleStartClicked}
                    variant="contained" color='primary'>
              cook coffee
            </Button>
            <div className='cupPlace' onClick={()=>this._handlerCupClicked(this.props.drinkState.cupEnabled)}>
              <div className={this.props.drinkState.cooking ? "decrease" : "idleEmpty"} style={{
                height: this.props.drinkState.cooking ||
                this.props.drinkState.cupEnabled ? "0%" : "100%",
              }}>
                <img className={`PrepareImg_${this.props.drinkState.orderedPlasticCup
                  ? 'plastic' : this.props.drinkState.orderedPaperCup ? 'paper' : 'empty'}`}
                     src="./assets/img/Prepare.svg" alt="prepare"/>
              </div>
              <div className={this.props.drinkState.cooking ||
              this.props.drinkState.cupEnabled ? "increase" : "idleFull"} style={{
                height: this.props.drinkState.cooking ||
                this.props.drinkState.cupEnabled ? "100%" : "0%",
              }}>
                <img className={`PrepareImg_${this.props.drinkState.orderedPlasticCup
                  ? 'plastic' : this.props.drinkState.orderedPaperCup ? 'paper' :
                    'empty'}_Color ${this.props.drinkState.cupEnabled
                  ?
                  `${this.props.drinkState.orderedPlasticCup
                    ? 'plastic' : this.props.drinkState.orderedPaperCup ? 'paper' :
                      'empty'}CupEnabled`
                  :
                  "cupDisabled"}`}
                     src="./assets/img/Prepare.svg" alt="prepare"/>
              </div>
            </div>
          </div>

        </div>
        <div className='choosingInterface'>
          <Button disabled={!this.props.drinkState.isStockedEnough}
                  onClick={this.handleArabicaSelected} variant="contained"
                  color={this.props.drinkState.orderedArabica ? 'primary' : 'default'}>
            ARABICA
          </Button>
          <Button disabled={!this.props.drinkState.isStockedEnough}
                  onClick={this.handleRobustaSelected} variant="contained"
                  color={this.props.drinkState.orderedRobusta ? 'primary' : 'default'}>
            ROBUSTA
          </Button>
          <Button disabled={!this.props.drinkState.isStockedEnough}
                  onClick={this.handleCreamToggled} variant="contained"
                  color={this.props.drinkState.orderedCream ? 'primary' : 'default'}>
            CREAM
          </Button>
          <div className='sugarPlace'>
            <Fab disabled={!this.props.drinkState.isStockedEnough}
                 onClick={this.handleLessSugarClicked} className='signPlace'>-</Fab>
            <Badge color="primary" badgeContent={this.props.drinkState.orderedSugar} className='sugarBadge'>
              <div className={`labelSugar_${this.props.drinkState.isStockedEnough}`}>SUGAR</div>
            </Badge>
            <Fab disabled={!this.props.drinkState.isStockedEnough}
                 onClick={this.handleMoreSugarClicked} className='signPlace'>+</Fab>
          </div>
          <Button disabled={!this.props.drinkState.isStockedEnough}
                  onClick={this.handleCupPlasticSelected} variant="contained"
                  color={this.props.drinkState.orderedPlasticCup ? 'primary' : 'default'}>
            PLASTIC CUP
          </Button>
          <Button disabled={!this.props.drinkState.isStockedEnough}
                  onClick={this.handleCupPaperSelected} variant="contained"
                  color={this.props.drinkState.orderedPaperCup ? 'primary' : 'default'}>
            PAPER CUP
          </Button>
        </div>
      </div>
    </div>
  };

  handleTriggerPathClicked() {
    SetLog('The Supplies door has opened')
  }

  handleArabicaSelected() {
    SetLog('Arabica Ordered');
    this.props.orderArabica();
    this.props.cancelRobusta();
  }

  handleRobustaSelected() {
    SetLog('Robusta Ordered');
    this.props.orderRobusta();
    this.props.cancelArabica();
  }

  handleCreamToggled() {
    if (!this.props.drinkState.orderedCream) {
      SetLog('Cream Ordered');
      this.props.orderCream();
    } else {
      SetLog('Cream canceled');
      this.props.cancelCream();
    }
  }

  handleCupPlasticSelected() {
    SetLog('Plastic Cup Ordered');
    this.props.orderPlasticCup();
    this.props.cancelPaperCup();
  }

  handleCupPaperSelected() {
    SetLog('Paper Cup Ordered');
    this.props.orderPaperCup();
    this.props.cancelPlasticCup();
  }

  handleLessSugarClicked() {
    if (this.props.drinkState.orderedSugar > 0) {
      this.props.lessSugar();
      SetLog('Less Sugar Ordered. Now = ' + (this.props.drinkState.orderedSugar - 1));
    } else {
      SetLog('Less Sugar Impossible. Now = ' + (this.props.drinkState.orderedSugar));
    }
  }

  handleMoreSugarClicked() {
    if (this.props.drinkState.orderedSugar < this.props.drinkState.orderedSugarMax) {
      this.props.moreSugar();
      SetLog('More Sugar Ordered. Now = ' + (this.props.drinkState.orderedSugar + 1));
    } else {
      SetLog('More Sugar Impossible. Reached maximum capacity. Now = ' + (this.props.drinkState.orderedSugar));
    }
  }

  handleCoinInserted() {
    if (this.props.drinkState.coins < this.props.drinkState.coinsMax) {
      this.props.putCoin();
      SetLog('Next Coin Inserted. Coins = ' + (this.props.drinkState.coins + 1));
    }
  }

  handleStartClicked() {
    let log = '';
    if (this.props.drinkState.coins > 0) {
      this.props.useCoin();
    }
    this.props.cookCoffee();
    if (this.props.drinkState.orderedArabica) {
      this.props.useArabica();
      log += '1 Arabica';
    } else {
      this.props.useRobusta();
      log += '1 Robusta';
    }
    if (this.props.drinkState.orderedPlasticCup) {
      this.props.usePlasticCup();
      log += ', 1 Plastic Cup';
    } else {
      this.props.usePaperCup();
      log += ', 1 Paper Cup';
    }
    if (this.props.drinkState.orderedCream) {
      this.props.useCream();
      log += ', 1 Cream';
    }
    if (this.props.drinkState.orderedSugar > 0) {
      this.props.useSugar(this.props.drinkState.orderedSugar);
      log += `, ${this.props.drinkState.orderedSugar} Sugar`;
    }
    SetLog(`Used: ${log}`);
    this.props.cookCoffee();
  }

  _handlerCupClicked(cupEnabled){
    if (cupEnabled){
      this.props.cupDisable();
      this.props.cancelPaperCup();
      this.props.cancelPlasticCup();
    }
  }

  _prepare() {
    if (this.props.drinkState.cooking) {
      setTimeout(() => {
        this.props.cookingTimeExpires();
        this.props.orderedNotEnough();
        this.props.cancelArabica();
        this.props.cancelRobusta();
        this.props.cancelCream();
        this.props.cancelSugar();
        this.props.cupEnable();
      }, 10000)
    }
  }

  _isOrderedEnough() {
    if (this.props.drinkState.coins >= this.props.drinkState.coinsMin &&
      (this.props.drinkState.orderedArabica || this.props.drinkState.orderedRobusta) &&
      (this.props.drinkState.orderedPlasticCup || this.props.drinkState.orderedPaperCup)) {
      if (!this.props.drinkState.isOrderedEnough) {
        this.props.orderedEnough();
      }
      SetLog(`Ordered Enough to Start`);
    } else {
      SetLog(`Ordered NOT Enough to Start`);
    }
    if (this.props.drinkState.isStockedEnough) {
      SetLog(`Supplies are filled enough to Start`);
    } else {
      SetLog(`Supplies are NOT filled enough to Start`);
    }
  }
};
