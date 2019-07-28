const SetLog = (message) => {
  let date = new Date();
  let iso = date.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)
  console.log(iso[1] + ' ' + iso[2] + ' ' + message);
};
export default SetLog
