'use strict';

const selection = require('./selection');
const insertion = require('./insertion');
const shell = require('./shell');
const merge = require('./merge');
const quick = require('./quick');

exports.selection = selection;
exports.insertion = insertion;
exports.shell = shell;
exports.merge = merge;
exports.quick = quick;

// 自带排序
exports.sort = function globalSort(array) {
  array.sort((a, b) => a - b);
};
