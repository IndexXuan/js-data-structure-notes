/*******************************************************
    > File Name: Tree.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年12月16日 星期三 11时30分07秒
 ******************************************************/

/*
 * 树是计算机科学中经常用到的一种数据结构。树是一种非线性的数据结构，以分层的方式
 * 存储数据，树被用来存储有层级的关系，比如文件系统中的文件，树还被用来存储有序列表。
 * 本章将研究一种特殊的树：二叉树。选择树而不是其他那些基本数据结构，是因为在二叉树
 * 上进行查找非常快(而在链表上查找则不是这样)，为二叉树添加或删除元素也非常快(而对
 * 数组执行添加或删除则不是这样)
 */

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.left;
        parent.right = n;
        break;
      }
    }
  }
}

/*
 * 遍历
 * 前序遍历 从root开始，按照根节点，左子树，右子树顺序遍历
 * 中序遍历 从root开始，按照左子树，根节点，右子树顺序遍历
 * 后续遍历 从root开始，按照左子树，右子树，根节点顺序遍历
 * 记忆技巧，所谓前后，是看根节点顺序
 */

/**
 * inOrder
 * 中序
 *
 * @param node
 * @return {undefined}
 */
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

/**
 * preOrder
 * 前序
 *
 * @param node
 * @return {undefined}
 */
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

/**
 * postOrder
 * 后续
 *
 * @param node
 * @return {undefined}
 */
function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

/*
 * 查找 
 */

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current != null) {
    if (current.data == data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node === null) {
    return null;
  }
  if (data === node.data) {
    // 没有子节点的节点
    if (node.left === null && node.right === null) {
      return null;
    }
    // 没有左子树的节点
    if (node.left === null) {
      return node.right;
    }
    // 没有右子树的节点
    if (node.right === null) {
      return node.left;
    }
    // 有两个子节点的节点
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

/*
 * 计数
 * BST的一个用途是记录一组数据集中出现的次数。比如，可以使用BST记录考试成绩的分布。
 * 给定一组考试成绩，可以写一段程序将它们加入BST，如果有某个成绩尚未在BST中出现，就将其加入BST
 * 如果已经出现，就将出现的次数加1.
 */



