const countries = require('world-countries');
const errors = require('common-errors');
const _ = require('lodash');

module.exports = function findByRegion(region) {

  var regionNations = [];

  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].region, region);
    if (countries[i].region === region) {
      regionNations.push(countries[i]);
    }
  }
  console.log(regionNations);
  if(regionNations.length === 0 )
    throw new errors.NotFoundError('/Error/');
  return (regionNations);
}
