const countries = require('world-countries');

module.exports = function touches(cc3a){
var borderNames = [];
  var borders=[];
  var obj = {};
for (var i = 0; i < countries.length; i++) {
  var temp = countries[i].cca3;
  if (temp === cc3a) {
     borders = countries[i].borders;

        for (var j = 0; j < countries.length; j++) {
          for (var k = 0; k < borders.length; k++) {
            var z = borders[k];
            if (z === countries[j].cca3) {
              borderNames.push(countries[j]);
            }
      }
    }
  break;
  }
 }
for(var i = 0; i < borderNames.length; i++){
  obj[i] = borderNames[i];
}
return borderNames;
}
