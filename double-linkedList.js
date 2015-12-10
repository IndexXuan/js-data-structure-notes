/*******************************************************
    > File Name: double-linkedList.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年10月29日 星期四 09时53分29秒
 ******************************************************/

/**
 *  尽管从链表的头节点遍历到尾节点很简单，但反过来，从后面向前面遍历则没那么简单，通过个Node对象添加一个属性，该属性存储指向
 *  前驱节点就容易多了，此时向链表插入一个节点需要更多的工作，我们需要指出该节点正确的前驱和后继，但是从在链表中删除节点时，
 *  效率就高了，效率提高了，不需要再查找待删除节点的前驱节点了
 *
 */

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous === null)) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}

function findLast() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next === null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function display() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode && currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
}

// test
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisesle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print();
cities.remove("Carlisle");
cities.display();
print();
cities.dispReverse();


















