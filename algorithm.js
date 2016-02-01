/**
File   : 动态规划.js
Author : IndexXuan(https://github.com/IndexXuan)
Mail   : indexxuan@gmail.com
Date   : Mon 01 Feb 2016 03:42:29 PM CST
*/

// 斐波那契数列
// 递归解法
function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n - 1) + recurFib(n - 2);
  }
}

// 动态规划解法，随着数列长度的增加，性能会好很多
function dynFib(n) {
  var val = [];
  for (var i = 0; i <= n; i++) {
    val[i] = 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1];
  }
}

// usage
console.log('递归斐波那契 : ' + recurFib(10));
console.log('动态规划斐波那契 : ' + dynFib(10));

// 寻找公共子串
function lcs(word1, word2) {
  var max = 0;
  var index = 0;
  var lcsarr = new Array(word1.length + 1);
  // 均多扩展一位，即表第一行第一列都是0占位
  for (var i = 0; i < word1.length + 1; i++) {
    lcsarr[i] = new Array(word2.length + 1);
    for (var j = 0; j < word2.length + 1; j++) {
      lcsarr[i][j] = 0;
    }
  }
  for (var i = 0;  i <= word1.length; i++) {
    for (var j = 0; j <= word2.length; j++) {
      if (i === 0 || j === 0) {
        lcsarr[i][j] = 0;
      } else {
        if (word1[i - 1] === word2[j - 1]) {
          // 得益于多扩展一行，才可以安全的i-1, j-1, 传递左上角保存的数值
          lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        } else {
          lcsarr[i][j] = 0;
        }
      }
      if (max < lcsarr[i][j]) {
        max = lcsarr[i][j];
        index = i;
      }
    }
  }
  // console.log(lcsarr)
  // console.log('max, index', max, index);
  var str = '';
  if (max === 0) {
    return "";
  } else {
    for (var i = index - max; i < index; i++) {
      str += word1[i];
    }
    return str;
  }
}
console.log('abbcc与dbbcc的公共子串 : ' + lcs("abbcc", "adbbcc"));

// ===== 背包问题 ===== //
// 递归解法
function max(a, b) {
  return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }
  if (size[n - 1] > capacity) {
    return knapsack(capacity, size, value, n - 1);
  } else {
    // 比较选入最后一个和不选入最后一个的结果，来判断"性价比"的高低
    return max(
      value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1), 
      knapsack(capacity, size, value, n - 1)
    );
  }
}

// 动态规划解法
function max(a, b) {
  return (a > b) ? a : b;
}

function dKnapsack(capacity, size, value, n) {
  var k = [];
  // 初始化二维数组
  for (var i  = 0; i <= capacity + 1; i++) {
    k[i] = [];
  }
  for (var i = 0; i <= n; i++) {
    for (var w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        k[i][w] = 0;
      } else if (size[i - 1] <= w) {
        k[i][w] = max(
          value[i - 1] + k[i - 1][w - size[i - 1]],
          k[i - 1][w]
        );
      } else {
        k[i][w] = k[i - 1][w];
      }
      // console.log(k[i][w] + " ");
    }
    // console.log("\n");
  }

  return k[n][capacity];
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log('递归背包问题 ' + knapsack(capacity, size, value, n));
console.log('动态规划背包问题 ' + dKnapsack(capacity, size, value, n));

function ksack(values, weights, capacity) {
  var load = 0;
  var i = 0;
  var w = 0;
  while (load < capacity && i < 4) {
    if (weights[i] <= (capacity - load)) {
      w += values[i];
      load += weights[i];
    } else {
      var r = (capacity - load) / weights[i];
      w += r * values[i];
      load += weights[i];
    }
    ++i;
  }
  return w;
}

var items = ['A', 'B', 'C', 'D'];
var valuess = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacitys = 30;
console.log('贪心算法背包问题 : ' + ksack(valuess, weights, capacitys)); // 显示 220












