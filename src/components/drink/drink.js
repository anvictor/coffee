import React, { Component } from "react";
import TriggerPath from '../link';
import './drink.css';
import Button from "@material-ui/core/Button/Button";
import Badge from '@material-ui/core/Badge';
import SetLog from '../../constants/set-log';
import Fab from "@material-ui/core/Fab/Fab";
export default class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // choosing interface disabled
      disabled: true,
      title: "Drink",
      path: {url:'/consumables', caption: 'CONSUMABLES'},
      isArabica: 'default',
      isArabusta: 'default',
      isCream: 'default',
      isPlastic: 'default',
      isPaper: 'default',
      cup: 'null',
      sugar: 0,
      coins: 0,
      startAt: new Date()
    };
    this.handleArabicaSelected = this.handleArabicaSelected.bind(this);
    this.handleArabustaSelected = this.handleArabustaSelected.bind(this);
    this.handleCreamToggled = this.handleCreamToggled.bind(this);
    this.handleCupPlasticSelected = this.handleCupPlasticSelected.bind(this);
    this.handleCupPaperSelected = this.handleCupPaperSelected.bind(this);
    this.handleLessSugarClicked = this.handleLessSugarClicked.bind(this);
    this.handleMoreSugarClicked = this.handleMoreSugarClicked.bind(this);
    this.handleCoinInserted = this.handleCoinInserted.bind(this);
    this.handleStartClicked = this.handleStartClicked.bind(this);

  }

  render() {
    return <div className='drinkScreen'>
      <div className='triggerPath'>
        <TriggerPath path={this.state.path}/>
      </div>
      <div className='drinkInterface'>
        <div className='coinCupPlace'>
          <div onClick={this.handleCoinInserted} className='coinPlace'>
            <Badge color="primary" badgeContent={this.state.coins} className='coinBadge'>
              <img className='Coin' src="./assets/img/Coin.svg" alt="INSERT COIN"/>
            </Badge>
            <img className='CoinAcceptor' src="./assets/img/CoinAcceptor.svg" alt="INSERT COIN"/>
          </div>


          <div className='start_cupPlace'>
            <Button className='startBtn' disabled={this.state.disabled} onClick={this.handleStartClicked} variant="contained" color='primary'>
              start
            </Button>
            <div className='cupPlace'>
              <div style={{transition: '1000ms',
                position: 'relative',
                overflow: 'hidden',
                width: "100%",
                height: 10*(10 - this.state.coins)+'%'}}>
                <img className={'PrepareImg_' + this.state.cup} src="./assets/img/Prepare.svg" alt="prepare"/>
              </div>
              <div style={{transition: '1000ms',
                position: 'relative',
                overflow: 'hidden',
                width: "100%",
                height: 10*(this.state.coins)+'%'}}>
                <img className={'PrepareImg_' + this.state.cup + '_Color'} src="./assets/img/Prepare.svg" alt="prepare"/>
              </div>
            </div>
          </div>

        </div>
        <div className='choosingInterface'>
          <Button disabled={this.state.disabled} onClick={this.handleArabicaSelected} variant="contained" color={this.state.isArabica}>
            ARABICA
          </Button>
          <Button disabled={this.state.disabled}  onClick={this.handleArabustaSelected} variant="contained" color={this.state.isArabusta}>
            ARABUSTA
          </Button>
          <Button disabled={this.state.disabled}  onClick={this.handleCreamToggled} variant="contained" color={this.state.isCream}>
            CREAM
          </Button>
          <div className='sugarPlace'>
            <Fab disabled={this.state.disabled}  onClick={this.handleLessSugarClicked} className='signPlace'>-</Fab>
            <Badge color="primary" badgeContent={this.state.sugar} className='sugarBadge'>
              <div className={'labelSugar_' + !this.state.disabled}>SUGAR</div>
            </Badge>
            <Fab disabled={this.state.disabled}  onClick={this.handleMoreSugarClicked} className='signPlace'>+</Fab>
          </div>
          <Button disabled={this.state.disabled}  onClick={this.handleCupPlasticSelected} variant="contained" color={this.state.isPlastic}>
            PLASTIC CUP
          </Button>
          <Button disabled={this.state.disabled}  onClick={this.handleCupPaperSelected} variant="contained" color={this.state.isPaper}>
            PAPER CUP
          </Button>
        </div>
      </div>
    </div>
  };

  handleArabicaSelected(){
    SetLog('Arabica Selected');
    this.setState({
      isArabica: "secondary",
      isArabusta: 'default'
    })
  }
  handleArabustaSelected(){
    SetLog('Arabusta Selected');
    this.setState({
      isArabica: "default",
      isArabusta: 'secondary'
    })
  }
  handleCreamToggled(){
    if (this.state.isCream === "default"){
      SetLog('Cream Selected');
      this.setState({
        isCream: "secondary",
      })
    } else if (this.state.isCream === "secondary"){
      SetLog('Cream canceled');
      this.setState({
        isCream: "default",
      })
    }
  }
  handleCupPlasticSelected(){
    SetLog('Plastic Cup Selected');
    this.setState({
      isPlastic: "secondary",
      isPaper: 'default',
      cup: 'plastic',
    })
  }
  handleCupPaperSelected(){
    SetLog('Paper Cup Selected');
    this.setState({
      isPlastic: "default",
      isPaper: 'secondary',
      cup: 'paper',
    })
  }
  handleLessSugarClicked(){
    if (this.state.sugar > 0){
      this.setState({
        sugar: this.state.sugar - 1
      })
      SetLog('Less (-) Sugar Clicked. Now = ' + (this.state.sugar-1));
    }
  }
  handleMoreSugarClicked(){
    if (this.state.sugar < 4){
      this.setState({
        sugar: this.state.sugar + 1
      })
      SetLog('More Sugar Clicked. Now = ' + (this.state.sugar+1));
    }
  }

  handleCoinInserted(){
    if (this.state.coins < 10){
      this.setState({
        coins: this.state.coins + 1,
        disabled: false
      })
      SetLog('Next Coin Inserted. Coins = ' + (this.state.coins+1));
    }
  }

  handleStartClicked(){
    if (this.state.coins >=2){
      this.setState({
        startAt: new Date(),
        coins: this.state.coins-1
      })
    }else {
      this.setState({
        disabled: true,
        isArabica: 'default',
        isArabusta: 'default',
        isCream: 'default',
        isPlastic: 'default',
        isPaper: 'default',
        cup: 'null',
        sugar: 0,
        coins: 0
      })
    }
    SetLog('Started. Coins = '+(this.state.coins-1));
  }
};
