const countries = require('world-countries');
const errors = require('common-errors');

module.exports = function get(cca3) {
  console.log(cca3);
  var nat = [];
  if(cca3.length != 3 )
    throw new errors.SyntaxError('/Error/');
  for (var i = 0; i < countries.length; i++) {
    var temp = countries[i].cca3;
    if (temp === cca3) {
      nat.push(countries[i]);
      console.log(nat);
      break;
    }
  }
  console.log(nat);
  if(nat[0] === null || nat[0] === [] || nat[0] === undefined){
    throw new errors.NotFoundError("/NotFound/")}
  return nat[0];
};
