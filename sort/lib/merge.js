'use strict';

const { less } = require('../../utils');

/**
 * 归并排序
 * 将数组分为两部分分别排序，然后再合并在一起
 * 递归调用排序方法
 * 添加额外归并的方法
 * @params {array}
 */

function mergeSort(array) {
  // _mergeSort(array, 0, array.length - 1);
  __mergeSort(array);
}

// 自顶向下的归并排序
function _mergeSort(array, lo, hi) {
  if (hi <= lo) return;
  const mid = lo + Math.floor((hi - lo) / 2);
  // 将左半边排序
  _mergeSort(array, lo, mid);
  // 将右半边排序
  _mergeSort(array, mid + 1, hi);
  // 归并结果
  merge(array, lo, mid, hi);
}

// 自底向上的归并排序
function __mergeSort(array) {
  const len = array.length;
  for (let i = 1; i < len; i = i + i) {
    for (let j = 0; j < len - i; j += i + i) {
      merge(array, j, j + i - 1, Math.min(j + i + i - 1, len - 1));
    }
  }
}

// 原地归并的抽象方法
function merge(array, lo, mid, hi) {
  let i = lo;
  let j = mid + 1;

  // 将array[lo...hi]复制到a[lo...hi]
  const a = [];
  for (let k = lo; k <= hi; k++) {
    a[k] = array[k];
  }

  // 归并回到array[lo...hi]
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      // 左半边用尽
      array[k] = a[j++];
    } else if (j > hi) {
      // 右半边用尽
      array[k] = a[i++];
    } else if (less(a[j], a[i])) {
      array[k] = a[j++];
    } else {
      array[k] = a[i++];
    }
  }
}

module.exports = mergeSort;
