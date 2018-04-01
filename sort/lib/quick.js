'use strict';

const { exch, less, shuffle } = require('../../utils');

/**
 * 快速排序
 * 通过切分方法将数组分成前后两个
 * 再递归调用排序方法
 * 关键在于切分
 * @param {Array} array
 */
function quickSort(array) {
  shuffle(array);
  sort(array, 0, array.length - 1);
}

function sort(array, lo, hi) {
  if (hi <= lo) return;

  // 切分
  const j = partition(array, lo, hi);
  sort(array, lo, j - 1);
  sort(array, j + 1, hi);
}

function partition(array, lo, hi) {
  // 左右扫描指针
  let i = lo;
  let j = hi + 1;

  // 切分元素
  let v = array[lo];

  const t = true;
  while (t) {
    // 扫描左右，检查扫描是否结束并交换元素
    while (less(array[++i], v)) {
      if (i == hi) break;
    }
    while (less(v, array[--j])) {
      if (j == lo) break;
    }
    if (i >= j) break;
    exch(array, i, j);
  }
  // 将v = a[j] 放在正确的位置
  exch(array, lo, j);
  return j;
}

module.exports = quickSort;
