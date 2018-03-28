'use strict';

const { randomArray, isSorted } = require('../../utils');
const {
  selection,
  insertion,
  shell,
  merge,
  quick,
  sort
} = require('../lib');

const size = 30000;
console.log('数组长度:', size);
const start = Date.now();
const array = randomArray(size);
const costTime = Date.now() - start;
console.log('生成随机数组耗时:', `${costTime}ms`);

test([
  selection,
  insertion,
  shell,
  merge,
  quick,
  sort
]);

function test(fns) {
  fns.forEach(fn => {
    const start = Date.now();
    const a = array.slice();
    fn(a);
    const costTime = Date.now() - start;
    console.log(`${fn.name}耗时：${costTime}ms`);
    if (!isSorted(a)) throw new Error(`${fn.name}错误`);
  });
}
