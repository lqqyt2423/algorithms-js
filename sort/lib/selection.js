'use strict';

const { exch, less } = require('../../utils');

/**
 * 选择排序
 * 找到数组中最小的元素，然后与第一个元素交换
 * 再找到其余中最小的元素，与第二个元素交换
 * 直至最后
 * @param {Array} array
 */

function selectionSort(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    let min = array[i];
    let index = i;
    for (let j = i + 1; j < len; j++) {
      if (less(array[j], min)) {
        min = array[j];
        index = j;
      }
    }
    exch(array, i, index);
  }
}

module.exports = selectionSort;
