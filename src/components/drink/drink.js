import React, { Component } from "react";
import TriggerPath from '../link';
import './drink.css';
import Button from "@material-ui/core/Button/Button";
import Badge from '@material-ui/core/Badge';
import SetLog from '../../constants/set-log';
import Fab from "@material-ui/core/Fab/Fab";

export default class Drink extends Component {
  constructor(props) {
    console.log('Drink props', props);
    super(props);
    this.state = props;
    this.handleArabicaSelected = this.handleArabicaSelected.bind(this);
    this.handleRobustaSelected = this.handleRobustaSelected.bind(this);
    this.handleCreamToggled = this.handleCreamToggled.bind(this);
    this.handleCupPlasticSelected = this.handleCupPlasticSelected.bind(this);
    this.handleCupPaperSelected = this.handleCupPaperSelected.bind(this);
    this.handleLessSugarClicked = this.handleLessSugarClicked.bind(this);
    this.handleMoreSugarClicked = this.handleMoreSugarClicked.bind(this);
    this.handleCoinInserted = this.handleCoinInserted.bind(this);
    this.handleStartClicked = this.handleStartClicked.bind(this);
  }

  render() {
    console.log('this.props', this.props);
    return <div className='drinkScreen'>
      <div className='triggerPath'>
        <TriggerPath path={this.props.drinkState.path}/>
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
            <Button className='startBtn' disabled={this.props.drinkState.startDisabled} onClick={this.handleStartClicked} variant="contained" color='primary'>
              start
            </Button>
            <div className='cupPlace'>
              <div style={{transition: '1000ms',
                position: 'relative',
                overflow: 'hidden',
                width: "100%",
                height: 10*(10 - this.props.drinkState.coins)+'%'}}>
                <img className={'PrepareImg_' + this.props.drinkState.cup} src="./assets/img/Prepare.svg" alt="prepare"/>
              </div>
              <div style={{transition: '1000ms',
                position: 'relative',
                overflow: 'hidden',
                width: "100%",
                height: 10*(this.props.drinkState.coins)+'%'}}>
                <img className={'PrepareImg_' + this.props.drinkState.cup + '_Color'} src="./assets/img/Prepare.svg" alt="prepare"/>
              </div>
            </div>
          </div>

        </div>
        <div className='choosingInterface'>
          <Button disabled={this.props.drinkState.menuDisabled} onClick={this.handleArabicaSelected} variant="contained" color={this.props.drinkState.orderArabica}>
            ARABICA
          </Button>
          <Button disabled={this.props.drinkState.menuDisabled} onClick={this.handleRobustaSelected} variant="contained" color={this.props.orderRobusta}>
            ROBUSTA
          </Button>
          <Button disabled={this.props.drinkState.menuDisabled}  onClick={this.handleCreamToggled} variant="contained" color={this.props.drinkState.orderCream}>
            CREAM
          </Button>
          <div className='sugarPlace'>
            <Fab disabled={this.props.drinkState.menuDisabled}  onClick={this.handleLessSugarClicked} className='signPlace'>-</Fab>
            <Badge color="primary" badgeContent={this.props.drinkState.sugar} className='sugarBadge'>
              <div className={`labelSugar_${!this.props.drinkState.menuDisabled}`}>SUGAR</div>
            </Badge>
            <Fab disabled={this.props.drinkState.menuDisabled}  onClick={this.handleMoreSugarClicked} className='signPlace'>+</Fab>
          </div>
          <Button disabled={this.props.drinkState.menuDisabled}  onClick={this.handleCupPlasticSelected} variant="contained" color={this.props.drinkState.isPlastic}>
            PLASTIC CUP
          </Button>
          <Button disabled={this.props.drinkState.menuDisabled}  onClick={this.handleCupPaperSelected} variant="contained" color={this.props.drinkState.isPaper}>
            PAPER CUP
          </Button>
        </div>
      </div>
    </div>
  };

  handleArabicaSelected(){
    SetLog('Arabica Selected');
    this.props.orderArabica();
  }
  handleRobustaSelected(){
    SetLog('Arabusta Selected');
    this.props.orderRobusta();
  }
  handleCreamToggled(){
    if (this.props.drink.isCream === "default"){
      SetLog('Cream Selected');
      this.props.orderCream();
    } else if (this.props.drink.isCream === "secondary"){
      SetLog('Cream canceled');
      this.props.cancelCream();
    }
  }
  handleCupPlasticSelected(){
    SetLog('Plastic Cup Selected');
    this.props.orderPlasticCup();
  }
  handleCupPaperSelected(){
    SetLog('Paper Cup Selected');
    this.props.orderPaperCup();
  }
  handleLessSugarClicked(){
    if (this.props.sugar > 0){
      this.props.lessSugar();
      SetLog('Less (-) Sugar Clicked. Now = ' + (this.props.drink.sugar-1));
    }
  }
  handleMoreSugarClicked(){
    if (this.props.sugar < 4){
      this.props.moreSugar();
      SetLog('More Sugar Clicked. Now = ' + (this.props.drink.sugar+1));
    }
  }

  handleCoinInserted(){
    if (this.props.coins < 10){
      this.props.putCoin();
      SetLog('Next Coin Inserted. Coins = ' + (this.props.drink.coins+1));
    }
  }

  handleStartClicked(){
    if (this.props.drink.coins >1){
      this.props.startClicked({
        disabled: true,
        isArabica: 'default',
        isArabusta: 'default',
        isCream: 'default',
        isPlastic: 'default',
        isPaper: 'default',
        cup: 'null',
        sugar: 0,
        coins: this.props.drink.coins-1,
        startAt: new Date(),
        timeLeft: 10
      });
    }
    else {
      this.props.startClicked({
        disabled: true,
        isArabica: 'default',
        isArabusta: 'default',
        isCream: 'default',
        isPlastic: 'default',
        isPaper: 'default',
        cup: 'null',
        sugar: 0,
        coins: 0,
        startAt: new Date(),
        timeLeft: 10000
      });
    }
    let timer = setInterval(()=>{
      if (this.props.drink.timeLeft){
        this.props.countDown();
        SetLog('Coffe is Cooking. Time left = '+(this.props.drink.timeLeft));
      } else {
        clearInterval(timer);
        SetLog('Coffee is Done. Take a Cup');
      }
    }, 1000);
    SetLog('Started. Coins = '+(this.props.drink.coins-1));
  }
};
