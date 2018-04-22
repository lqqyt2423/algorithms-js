'use strict';

const ST = require('../lib/sequentialSearch');
const { log } = console;

// 行为测试用例

const keys = 'SEARCHEXAMPLE'.split('');
const st = new ST();

keys.forEach((key, i) => {
  st.put(key, i);
});

for (let key of st) {
  log(`${key} ${st.get(key)}`);
}
