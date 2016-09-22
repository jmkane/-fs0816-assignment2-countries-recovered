const countries = require('world-countries');
const _ = require('lodash');


module.exports =
  function all(settings = { loadAll: false, index: 0, pageSize: 15 }) {
    var result;
    var nations = countries.map(function(obj){
      return obj.name.official;
    });

    var snations = _.sortBy(nations);

    if (settings.loadAll === true) {result = countries.slice();
      console.log(result);
      return result;
    }
    else {
       x = settings.index;
      console.log(x);
      console.log(settings.pageSize);
      if (x === 0) {
        result = countries.slice(x, settings.pageSize);
        console.log(result);
        return result;
      }
      else {
        var x = settings.index;
         y = settings.pageSize;
        console.log(x,y, settings.pageSize);
        var page = Math.ceil(countries.length / settings.pageSize);
        x = settings.index * settings.pageSize;
        var y = x + settings.pageSize;
        if (y > countries.length) {
          result = countries.slice(x);
          console.log(result);
          return;
        }
        result = countries.slice(x, y);
        console.log(result);
        return result;
      }
    }
  };









