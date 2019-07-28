const InitialState = {
  consumables:{
    arabica: 0, //1 ->> 3
    arabusta: 0, //1 -> 3
    cream: 0, //1 ->> 3
    sugar: 0, //4->> 12
    cupPlastic: 0, //1 ->> 3
    cupPaper: 0 //1 ->> 3
  },
  coffee: '', // "arabica" || "arabusta"
  cream: false, // true || false
  sugar: 0, // 0-4
  cupClass: "plastic", // "plastic" || "paper"
  coin: 0, // 1 ->> 3
  isCup: false, // true || false
  isStart: false, // true || false
  isRunning: 10, // 10-0 seconds countdown
};
export default InitialState
