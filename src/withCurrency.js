const countries = require('world-countries');
const _ = require('lodash');
const errors = require('common-errors');

module.exports = function withCurrency(money) {

  var currencyUser = [];
  if(money.length != 3 )
    throw new errors.SyntaxError('/Error/');

  for (var i = 0; i < countries.length; i++) {
    var temp = countries[i].currency.includes(money);
    if (temp === true) {
      currencyUser.push(countries[i].name.official);
    }

  }


  console.log(currencyUser);
  return currencyUser;
}
