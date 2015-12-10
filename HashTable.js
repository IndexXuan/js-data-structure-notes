/*******************************************************
    > File Name: HashTable.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年12月09日 星期三 11时33分33秒
 ******************************************************/

/*
 * 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的
 * 数据结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操
 * 作却效率低下，比如查找一组数据中的最大值和最小值。这些操作得求助于其他数据
 * 结构，二叉查找树是一个很好的选择。本章将介绍如何实现散列表，并且了解什么时
 * 候该使用散列表存取数据。
 */

/*
 * 我们的散列表是基于数组进行设计的，数组的长度是预先设定的，如有需求，我们随时
 * 可以增加。所有元素根据和该元素对应的键，保存在数组的特定位置，该键和我们前面
 * 讲道的字典中的键是类似的概念。使用散列表存储数据时，通过一个散列函数将键映射
 * 为一个数字，这个数字的范围是0到散列表的长度。
 *
 * 理想情况下，散列函数将每个键值对映射为唯一的数组索引，然而，键的数据是无限的
 * 数组的长度是优先的(理论上　JavaScript里)，一个更现实的目标是让散列函数尽量将
 * 键均匀的映射到数组中。
 *
 * 即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为
 * 碰撞(collision),当碰撞发生时，我们需要有方法去解决。本章稍后的部分将详细讨论如
 * 何解决碰撞。
 * 
 * 我们要确定的最后一个问题：散列表的数组究竟应该多大？这是编写散列函数时必须要考虑
 * 的。对数组大小常见的限制就是数组长度应该是个质数，在实现各种散列函数室时，我们将
 * 讨论为什么要求数组长度为质数，之后，会有多种确定数组大小的策略，所有的策略都基于
 * 处理碰撞的技术，因此，我们将会讨论如何处理碰撞时对它们进行讨论
 */

// HashTable Class
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.get = get;
}

// 除留余数法
function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function put(data) {
  //var pos = this.simpleHash(data);
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(i + ": " + this.table[i]);
    }
  }
}


// Test: simpleHash
var someNames = ["Divid", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", 
　　　　　　　　 "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0, len = someNames.length; i < len; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro();

/*
 * 35:  Cynthia
 * 45:  Clayton
 * 57:  Donnie
 * 77:  David
 * 95:  Danny 
 * 116: Mike
 * 132: Jennifer
 * 134: Jonathan
 * 
 * 我们发现了一个问题，输出的序列与我们输入的序列相比并不全，调试发现
 * 居然"Clayton"和"Raymond"的散列值是一样的，使"Raymond"并没有被加入
 * 散列表，看来是碰撞了，我们需要更好的散列函数
 */

// a better hashFn
// 霍纳算法
function betterHash(string) {
  var H = 37; // 一个较小的质数，推荐31，但是31在本题中不起作用
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total + this.table.length - 1;
  }
  return parseInt(total, 10);
}























