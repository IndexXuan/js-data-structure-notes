/*******************************************************
    > File Name: linkedList.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年10月28日 星期三 16时56分48秒
 ******************************************************/

/**
 *  数组的缺点：
 *  数组不总是组织数据的最佳数据结构，原因如下，在很多编程语言中，数组的长度是固定的
 *  所以当数组已经被数据填满时，要加入新的元素就非常困难，在数组中,添加和删除元素很麻烦
 *  ，因为需要将数组中的其他元素向前或向后平移，以反映数组刚刚进行了添加或删除操作。
 *  然而，JavaScript的数组并不存在上述问题，因为使用了split()方法不需要再访问其他数组元素了
 */

/** 
 *  js数组并不像c++和Java的数组那样高效，它是被实现成对象了。如果你发现数组的效率不高，可以
 *  考虑用链表来替代它，除了对数据的随机访问，链表几乎可以用在任何使用一维数组使用的情况下
 *  ，如果需要随机访问，数组仍然是更好的选择。
 */

// 设计一个基于对象的链表
function Node(element) {
    this.element = element;
    this.next = next;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

/**
 * find
 * 根据item在有序链表中查找，从head开始迭代
 *
 * @param item
 * @return {Node}
 */
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * insert
 * 在链表某元素后插入新节点
 *
 * @param newElement 新节点的值
 * @param item 插入标识节点
 */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

/**
 * findPrevious
 * 向前查找，直到找到或没找到返回默认值head
 *
 * @param item
 * @return {Node}
 */
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element != item)) { // not good logic...
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * remove
 * 删除一个元素
 *
 * @param item
 */
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

/**
 * display
 * 显示链表
 *
 */
function display() {
    var currNode = this.head;
    while (!currNode.next.element) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

// test
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();























