/**
  File   : Sort.js
  Author : IndexXuan(https://github.com/IndexXuan)
  Mail   : indexxuan@gmail.com
  Date   : Sun 31 Jan 2016 07:49:50 PM CST
*/

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  
  this.method = bubbleSort;
  for (var i = 0; i < numElements; i++) {
    this.dataStore[i] = i;
  }
}

function clear() {
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    this.dataStore[i] = i; 
  }
}

function setData() {
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var restr = "";
  for (var i = 0, len = this.dataStore.length; i < len; i++) {
    restr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 === 0) {
      restr += "\n";
    }
  }
  return restr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// usage
var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

// 基本排序算法
// 冒泡排序, 将序列相邻的两两比较，最大的放最后，收窄序列，序列长度从length 到 2 => 序列偏后
function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
  }
}

bubbleSort.call(myNums);
console.log("after Bubble Sort : " + myNums.toString())

// 选择排序, 从序列选最小的放到最前面，同时不断收窄这个序列，从length到2 => 序列偏后
function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
      swap(this.dataStore, outer, inner);
    }
  }
}

// 选择排序, 类似于扑克牌一点点排好序（范围从1到length-1） => 序列偏前
function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}

// ===== 高级排序算法 ===== //
// 希尔排序, 距离不断缩小的比较排序，可事先确定gap[5, 3, 1], 也可动态计算

// 归并排序, 把一系列排好序的子序列合并成一个大的完整的有序序列, 自顶向下，自底向上
function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArray(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArray(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length - 1); ++i) {
    rightArr[i] = arr[i];
    ++k;
  }
  k = startLeft;
  for (var i = 0; i < (leftArr.length - 1); ++i) {
    leftArr[i] = arr[i];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // 哨兵值
  leftArr[leftArr.length - 1] = Infinity; // 哨兵值
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  console.log("left array - ", leftArr);
  console.log("right array - ", rightArr);
}

// 快速排序, 处理大数据集最快的排序算法之一，它是一种分而治之的算法，
// 通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。
// 该算法不断重复这个步骤知道所有数据都是有序的
function qSort(list) {
  if (list.length === 0) {
    return [];
  }
  var lesser = [];
  var greater = [];
  var pivot = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      lesser.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater)); // 递归, 分治
}



















