const countries = require('world-countries');
const _ = require('lodash');

module.exports = function distance(c1,c2)
{


  for (var i = 0; i < countries.length; i++) {

    var temp = countries[i].cca3;

    if (temp === c1 || temp === c2) {
      if (temp !== c2) {
        var lat1 = countries[i].latlng;
        temp = '';
      }
      else {
        var lat2 = countries[i].latlng;
        temp = '';
      }
    }
  }


  function distanceCalculation(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344
    }
    if (unit == "N") {
      dist = dist * 0.8684
    }
    return dist
  }

  var countryDistance = distanceCalculation(lat1[0], lat1[1], lat2[0], lat2[1], 'M');
  console.log(typeof(countryDistance));
  var numDistance = parseFloat(countryDistance);
  console.log('Distance equals ', numDistance);
  return numDistance;
}
