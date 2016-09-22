const countries = require('world-countries');
const Countries = require('./all');
const _ = require('lodash');

module.exports = function filter(value) {
  var results = [];
  if (value == null) {
    value = true;
    results = Countries({loadAll: value});
    return results;
  }
  else {
    for (var i = 0; i < countries.length; i++) {
      var temp = countries[i].name.official.includes(value);
      if (temp == true) {
        results.push(countries[i]);
      }
    }
    console.log(results[0]);
    return results;
  }
}
