'use strict';

// 选择排序

const urils = require('./utils');
const less = urils.less;
const exch = urils.exch;

function sort(a) {
  // 升序排列
  let len = a.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (less(a[j], a[min])) min = j;
    }
    exch(a, i, min);
  }
}

module.exports = sort;
