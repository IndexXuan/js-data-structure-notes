/*******************************************************
    > File Name: Set.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年12月15日 星期二 19时13分36秒
 ******************************************************/

/*
 * 集合是一种包括不同元素的数据结构。集合中的元素称为成员，集合的两个最重要
 * 的特性是：首先，集合中的成员是无序的，其次，集合中不允许相同成员的存在。集合
 * 在计算机科学中扮演了非常重要的角色，然而在很多编程语言中，并不把集合当成是一
 * 种数据类型，当你想要创建一个数据结构，用来保存一些独一无二的元素时，比如一段文
 * 本中的用到的单词，集合就变得非常有用。本章讨论如何在JavaScript中创建Set类。
 */

/*
 * 集合的一些概念：空集，子集，集合相等，不赘述...
 */

/* 集合的一些操作: 并集，交集，补集
 */

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

function add() {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}

function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
  } else {
    return false;
  }
}

function show() {
  return this.dataStore;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  }
  return false;
}

/**
 * union
 * 并集
 *
 * @param {Set} set
 * @return {Set}
 */
function union(set) {
  var tempSet = new Set();
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    tempSet.add(this.dataStore[i]); 
  }
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    } 
  }
  return tempSet;
}

function intersect(set) {
  var tempSet = new Set();
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    if (set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    } 
  }
}

function subset(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    for (var menber in this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }
  }
  return true;
}

function size() {
  return this.dataStore.length;
}

function difference(set) {
  var tempSet = new Set();
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    if (!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    } 
  }
  return tempSet;
}























