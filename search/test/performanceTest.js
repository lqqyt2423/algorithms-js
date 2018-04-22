'use strict';

/**
 * 性能测试用例
 * 测试文件下载地址
 * https://algs4.cs.princeton.edu/31elementary/tinyTale.txt
 * https://algs4.cs.princeton.edu/31elementary/tale.txt
 * https://algs4.cs.princeton.edu/31elementary/leipzig1M.txt
 */

const fs = require('fs');
const path = require('path');
const ST = require('../lib/sequentialSearch');
const { log } = console;

// 接收第一个参数 最小键长
const minlen = Number(process.argv[2]) || 1;
// 接收第二个参数 性能测试文件名
const filename = process.argv[3] || 'tinyTale.txt';

const st = new ST();

// 过滤掉较短的单词
readArrayFromFile(filename).filter(word => word.length >= minlen).forEach(word => {
  if (!st.contains(word)) {
    st.put(word, 1);
  } else {
    st.put(word, st.get(word) + 1);
  }
});

// 找出出现频率最高的单词
let max = '';
st.put(max, 0);
for (let word of st) {
  if (st.get(word) > st.get(max)) max = word;
}
log(max, st.get(max));

// 从文件读取文件返回单词数组
function readArrayFromFile(filename) {
  return fs.readFileSync(path.join(__dirname, filename), 'utf8').trim().split(/\s+/);
}
