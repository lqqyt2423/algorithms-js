'use strict';

class Node {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

/**
 * 顺序查找 基于无序链表
 */

class SequentialSearchST {
  constructor() {
    this.first = null;
  }

  // 迭代器
  *[Symbol.iterator]() {
    for (let x = this.first; x != null; x = x.next) {
      yield x.key;
    }
  }

  // 查找给定的键，返回相关联的值
  get(key) {
    for (let x = this.first; x != null; x = x.next) {
      if (key == x.key) return x.val;
    }
    return null;
  }

  // 查找给定的键，找到则更新其值，否则在表中新建结点
  put(key, val) {
    for (let x = this.first; x != null; x = x.next) {
      if (key == x.key) {
        x.val = val;
        return;
      }
    }
    this.first = new Node(key, val, this.first);
  }

  contains(key) {
    return this.get(key) != null;
  }

}

module.exports = SequentialSearchST;
