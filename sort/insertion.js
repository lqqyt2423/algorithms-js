'use strict';

// 插入排序

const urils = require('./utils');
const less = urils.less;
const exch = urils.exch;

function sort(a) {
  // 升序排列
  let len = a.length;
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
      exch(a, j, j-1);
    }
  }
}

module.exports = sort;
