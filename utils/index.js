'use strict';

function less(i, j) {
  return i < j;
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

function readArray() {
  process.stdin.setEncoding('utf8');
  let str = '';
  return new Promise(resolve => {
    process.stdin.on('readable', () => {
      const chunk = process.stdin.read();
      if (chunk !== null) {
        str += chunk;
      }
    });
    process.stdin.on('end', () => {
      str = str.trim();
      let array = str.split(' ');
      resolve(array);
    });
  });
}

function randomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const number = Math.floor(Math.random() * size);
    array.push(number);
  }
  return array;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

exports.less = less;
exports.exch = exch;
exports.show = show;
exports.isSorted = isSorted;
exports.readArray = readArray;
exports.randomArray = randomArray;
exports.shuffle = shuffle;
