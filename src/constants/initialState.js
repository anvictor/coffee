const InitialState = {
  refill:{
    title: "Refill",
    path: {url:'/drink', caption: 'DRINK', color: 'secondary'},
    stockArabica: 0,
    stockArabicaMin: 1,
    stockArabicaMax: 3,
    stockRobusta: 0,
    stockRobustaMin: 1,
    stockRobustaMax: 3,
    stockCream: 0,
    stockCreamMin: 1,
    stockCreamMax: 5,
    stockPlasticCup: 0,
    stockPlasticCupMin: 1,
    stockPlasticCupMax: 9,
    stockPaperCup: 0,
    stockPaperCupMin: 1,
    stockPaperCupMax: 9,
    stockSugar: 0,
    stockSugarMin: 4,
    stockSugarMax: 21,
  },
  drink: {
    // choosing interface disabled
    title: "Drink",
    path: {url:'/refill', caption: 'refill', color: 'secondary'},
    cooking: false,
    isStockedEnough: false,
    isOrderedEnough: false,
    coins: 0,
    coinsMin: 1,
    coinsMax: 10,
    orderedArabica: false,
    orderedRobusta: false,
    orderedCream: false,
    orderedPlasticCup: false,
    orderedPaperCup: false,
    orderedSugar: 0,
    orderedSugarMin: 0,
    orderedSugarMax: 4,
    cupEnabled: false,
    cupTaken: false,
  }
};
export default InitialState
