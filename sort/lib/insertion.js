'use strict';

const { exch, less } = require('../../utils');

/**
 * 插入排序
 * 数组从左至右依次检查
 * 当前索引与前一个索引数值对比，如果小于则交换位置，直至比前一个索引大
 * 当前索引左边有序，右边无序
 * @params {array}
 */

function insertionSort(array) {
  for (let i = 1, len = array.length; i < len; i++) {
    for (let j = i - 1; less(array[j + 1], array[j]) && j >= 0; j--) {
      exch(array, j + 1, j);
    }
  }
}

module.exports = insertionSort;
