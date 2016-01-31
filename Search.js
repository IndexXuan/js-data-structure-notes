/**
  File   : Search.js
  Author : IndexXuan(https://github.com/IndexXuan)
  Mail   : indexxuan@gmail.com
  Date   : Sun 31 Jan 2016 11:18:21 PM CST
*/

// 顺序查找
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i;
    }
  }
  return -1;
}

function min(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min;
}

function max(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

// 二分查找
function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var middle = Math.floor((upperBound + lowerBound) / 2);
    if (arr[middle] < data) {
      lowerBound = middle + 1;
    } else if (arr[middle] > data) {
      upperBound = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}


















