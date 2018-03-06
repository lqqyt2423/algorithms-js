'use strict';

const { exch, less } = require('../../utils');

/**
 * 希尔排序
 * 插入排序的升级版
 * 插入排序每次比较元素和前一个元素来交换，希尔排序通过比较不相邻的元素，加快排序的速度
 * 不断缩小比较的幅度，直至比较相邻的元素
 * 递增序列 3 * h + 1
 * @params {array}
 */

function shellSort(array) {
  const len = array.length;
  // 相邻的距离
  let h = 1;
  while (h < len) {
    h = h * 3 + 1;
  }
  h = Math.floor(h / 3);
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i - h; less(array[j + h], array[j]) && j >= 0; j -= h) {
        exch(array, j + h, j);
      }
    }
    h = Math.floor(h / 3);
  }
}

module.exports = shellSort;
