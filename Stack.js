/*******************************************************
    > File Name: Stack.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年10月26日 星期1 
 ******************************************************/

/**
 *  列表是最自然的一种数据组织方式，上一章已经介绍了如何使用List类将数据组织成列表，
 *  如果数据存储的顺序不重要，也不必对数据进行查找，那么列表就是再好不过的数据结构。
 *  由于其他的一些应用，列表就显得太过简陋了，我们需要一种和列表类似但是更复杂的数据结构。
 */

/** 
 *  栈是一种高效的数据结构，它可以用来解决计算机世界里的很多问题，因为数据只能在栈顶添加或删除，所以这样的操作很快，
 *  而且容易实现。栈的使用遍布程序语言的方方面面，从表达式求值到处理函数调用。
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element) {
    this.dataStore.push(element);
    this.top++;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.dataStore.length;
}

function clear() {
    this.top = 0;
}

// test
var s = new Stack();
s.push('1');
s.push('2');
s.push('3');
print('length' + s.length());
print(s.peek());
var poped = s.pop();
print('poped element is : ' + poped);
print(s.peek());
s.push('4');
s.clear();
print('length ' + s.length());
print(s.peek());
s.push('5');
print(s.peek());

// usage 

/** 
 *  数制转化
 *  一个适用于2-9基数的进制转化算法
 *
 *  (1) 最高位为n%b， 将此位压入栈
 *  (2) 使用n/b代替n
 *  (3) 重复步骤1和2， 直到n等于0，且没有余数
 *  (4) 持续将栈内元素弹出，直到栈为空，依次将这些元素排序，就得到转换后数据的字符串形式
 *
 */

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    
    return converted;
}

 // test
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);

// 输出为:
// 32 converted to base 2 is 100000
// 125 converted to base 8 is 175

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = "Hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome");
} else {
    print(word + " is not a palindrome");
}
word = 'racecar';
if (isPalindrome(word)) {
    print(word + " is a palindrome");
} else {
    print(word + " is not a palindrome");
}

// 输出
// Hello is not a palindrome
// racecar is a palindrome

/**
 *  模拟递归
 */

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

print(factorial(5));
print(fact(5));




















