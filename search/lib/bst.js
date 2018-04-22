'use strict';

class Node {
  constructor(key, val, N) {
    // 键、值、以该结点为根的子树的结点总数
    this.key = key;
    this.val = val;
    this.N = N;
    this.left = null;
    this.right = null;
  }
}

// 二叉查找树
class BST {

  constructor() {
    // 二叉查找树的根节点
    this.root = null;
  }

  size() {
    return this._size(this.root);
  }
  _size(node) {
    if (node == null) {
      return 0;
    } else {
      return node.N;
    }
  }

  get(key) {
    return this._get(this.root, key);
  }
  _get(node, key) {
    // 以node为根节点的子树中查找并返回key所对应的值
    // 如果找不到则返回null
    if (node == null) return null;
    if (key < node.key) {
      return this._get(node.left, key);
    } else if (key > node.key) {
      return this._get(node.right, key);
    } else {
      return node.val;
    }
  }

  put(key, val) {
    // 查找key，找到则更新值，否则创建新结点
    this.root = this.put(this.root, key, val);
  }
  _put(node, key, val) {
    // 如果key存在于以node为根结点的子树中则更新它的值
    // 否则将以key和val为键值对的新节点插入到改子树中
    if (node == null) return new Node(key, val, 1);
    if (key < node.key) {
      node.left = this._put(node.left, key, val);
    } else if (key > node.key) {
      node.right = this._put(node.right, key, val);
    } else {
      node.val = val;
    }
    node.N = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  min() {
    return this._min(this.root).key;
  }
  _min(node) {
    if (node.left == null) return node;
    return this._min(node.left);
  }

  max() {
    return this._max(this.root).key;
  }
  _max(node) {
    if (node.right == null) return node;
    return this._max(node.right);
  }

  floor(key) {
    let node = this._floor(this.root, key);
    if (node == null) {
      return null;
    } else {
      return node.key;
    }
  }
  _floor(node, key) {
    if (node == null) return null;
    if (key == node.key) return node;
    if (key < node.key) return this._floor(node.left, key);
    // 判断右边是否存在结点
    let t = this._floor(node.right, key);
    if (t != null) {
      return t;
    } else {
      return node;
    }
  }

  ceiling(key) {
    let node = this._ceiling(this.root, key);
    if (node == null) {
      return null;
    } else {
      return node.key;
    }
  }
  _ceiling(node, key) {
    if (node == null) return null;
    if (key == node.key) return node;
    if (key > node.key) return this._ceiling(node.right, key);
    // 判断左边是否存在结点
    let t = this._ceiling(node.left, key);
    if (t != null) {
      return t;
    } else {
      return node;
    }
  }

  select(k) {
    return this._select(this.root, k).key;
  }
  _select(node, k) {
    // 返回排名为k的结点
    if (node == null) return null;
    let t = this._size(node.left);
    if (t > k) {
      return this._select(node.left, k);
    } else if (t < k) {
      return this._select(node.right, k - t - 1);
    } else {
      return node;
    }
  }

  rank(key) {
    return this._rank(key, this.root);
  }
  _rank(key, node) {
    // 返回以node为根节点的子树中小于node.key的键的数量
    if (node == null) return null;
    if (key < node.key) {
      return this._rank(key, node.left);
    } else if (key > node.key) {
      return 1 + this._size(node.left) + this._rank(key, node.right);
    } else {
      return this._size(node.left);
    }
  }

}

module.exports = BST;
