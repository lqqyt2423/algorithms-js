'use strict';

const { randomArray, isSorted } = require('../../utils');
const { selection, insertion, shell, merge } = require('../lib');

const size = 30000;
console.log('数组长度:', size);
const start = Date.now();
const array = randomArray(size);
const costTime = Date.now() - start;
console.log('生成随机数组耗时:', `${costTime}ms`);


// 选择排序
(array => {
  const start = Date.now();
  selection(array);
  const costTime = Date.now() - start;
  console.log('选择排序耗时:', `${costTime}ms`);
  if (!isSorted(array)) throw new Error('选择排序错误');
})(array.slice());

// 插入排序
(array => {
  const start = Date.now();
  insertion(array);
  const costTime = Date.now() - start;
  console.log('插入排序耗时:', `${costTime}ms`);
  if (!isSorted(array)) throw new Error('插入排序错误');
})(array.slice());

// 希尔排序
(array => {
  const start = Date.now();
  shell(array);
  const costTime = Date.now() - start;
  console.log('希尔排序耗时:', `${costTime}ms`);
  if (!isSorted(array)) throw new Error('希尔排序错误');
})(array.slice());

// 归并排序
(array => {
  const start = Date.now();
  merge(array);
  const costTime = Date.now() - start;
  console.log('归并排序耗时:', `${costTime}ms`);
  if (!isSorted(array)) throw new Error('归并排序错误');
})(array.slice());

// 自带排序
(array => {
  const start = Date.now();
  array.sort((a, b) => {
    return a - b;
  });
  const costTime = Date.now() - start;
  console.log('自带排序耗时:', `${costTime}ms`);
  if (!isSorted(array)) throw new Error('自带排序错误');
})(array.slice());
