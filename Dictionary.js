/*******************************************************
    > File Name: Dictionary.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年12月08日 星期二 10时23分12秒
 ******************************************************/

function Dictionary() {
  this.add = add;
  this.datastore = {};
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.clear = clear;
  this.count = count;
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

/**
 * showAll
 *
 * @param {Boolean} isOrdered 
 * ordered print or not
 */
function showAll(isOrdered) {
  var datakeys = Array.prototype.slice.call(Object.keys(this.datastore));
  if (isOrdered !== false) {
    datakeys.sort();
  }
  for (var i = 0, len = datakeys.length; i < len; i++) {
    console.log(datakeys[i] + " => " + this.datastore[datakeys[i]]);
  }
}

function count() {
  return Array.prototype.slice.call(Object.keys(this.datastore)).length; 
}

function clear() {
  this.datastore = {};
}

var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("Divid", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("Divid's extension: " + pbook.find("Divid"));
pbook.remove("Divid");
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());

