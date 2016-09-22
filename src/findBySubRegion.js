const countries = require('world-countries');
const errors = require('common-errors');
const _ = require('lodash');

module.exports = function findBySubRegion(subRegion) {

  var regionNations = [];

  for (var i = 0; i < countries.length; i++) {
    if (countries[i].subregion === subRegion)
      regionNations.push(countries[i].name.official);
  }
  console.log(regionNations);
  if(regionNations.length === 0 )
    throw new errors.NotFoundError('/Error/');
  return (regionNations);
}
