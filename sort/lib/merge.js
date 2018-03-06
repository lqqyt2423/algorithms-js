'use strict';

const { exch, less } = require('../../utils');

/**
 * 归并排序
 * 将数组分为两部分分别排序，然后再合并在一起
 * 递归调用排序方法
 * 添加额外归并的方法
 * @params {array}
 */

function mergeSort(array) {
  const len = array.length;
  if (len <= 1) return array;
  if (len === 2) {
    if (less(array[1], array[0])) exch(array, 0, 1);
    return array;
  }
  const mid = Math.floor(len / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  array = merge(leftArray, rightArray);
  return array;
}

function merge(leftArray, rightArray) {
  const leftLen = leftArray.length;
  const rightLen = rightArray.length;
  if (leftLen === 0 || rightLen === 0) {
    return leftArray.concat(rightArray);
  }
  let array = [];
  let leftItem = leftArray.shift();
  let rightItem = rightArray.shift();
  while (array.length < leftLen + rightLen) {
    if (leftItem < rightItem) {
      array.push(leftItem);
      if (leftArray.length) {
        leftItem = leftArray.shift();
      } else {
        array = array.concat(rightArray);
        break;
      }
    } else {
      array.push(rightItem);
      if (rightArray.length) {
        rightItem = rightArray.shift();
      } else {
        array = array.concat(leftArray);
        break;
      }
    }
  }
  return array;
}

module.exports = mergeSort;
