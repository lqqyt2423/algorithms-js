'use strict';

class In {
  static readStrings() {
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
}

module.exports = In;
