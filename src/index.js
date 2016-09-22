const ALL = require('./all');
const GET = require('./get');
const TOUCHES = require('./touches');
const DISTANCE = require('./distance');
const SUBTRACT = require('./subtractArea');
const CURRENCY = require('./withCurrency');
const Region = require('./findByRegion');
const SUBREGION = require('./findBySubRegion');
const  FILTER = require('./filter');
const _ = require('lodash');

module.exports = {
  all: ALL,
  get: GET,
  touches: TOUCHES,
  distance: DISTANCE,
  subtractArea: SUBTRACT,
  withCurrency: CURRENCY,
  findBySubRegion: SUBREGION,
  findByRegion: Region,
  filter: FILTER
  };
