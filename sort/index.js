'use strict';

// node index.js < data/tiny.txt

const assert = require('assert');
const In = require('./in');
const utils = require('./utils');

const isSorted = utils.isSorted;
const show = utils.show;

// const sort = require('./selection');
const sort = require('./insertion');

In.readStrings().then(array => {
  sort(array);
  assert(isSorted(array));
  show(array);
});
