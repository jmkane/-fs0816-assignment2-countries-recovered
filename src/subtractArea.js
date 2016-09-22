const countries = require('world-countries');
const _ = require('lodash');

module.exports = function subtractArea(c1,c2) {


  for (var i = 0; i < countries.length; i++) {

    var temp = countries[i].cca3;

    if (temp === c1 || temp === c2) {
      if (temp !== c2) {
        var area1 = countries[i].area;
        temp = '';
      }
      else {
        var area2 = countries[i].area;
        temp = '';
      }
    }
  }

  var difference = Math.abs(area1 - area2);
  console.log('Difference in Area = ', difference);
  return (difference);
}
