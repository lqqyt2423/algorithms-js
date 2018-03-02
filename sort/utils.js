'use strict';

function less(i, j) {
  return i<j;
}

function exch(array, i, j) {
  let t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function show(array) {
  // 单行打印数组
  console.log(array.join(' '));
}

function isSorted(array) {
  // 测试数组是否有序
  for (let i = 1, len = array.length; i < len; i++) {
    if (less(array[i], array[i - 1])) return false;
  }
  return true;
}

exports.less = less;
exports.exch = exch;
exports.show = show;
exports.isSorted = isSorted;
