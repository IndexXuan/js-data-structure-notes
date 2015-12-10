/*******************************************************
    > File Name: circle-linkedList.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年10月29日 星期四 10时30分33秒
 ******************************************************/

/**
 *  循环链表
 *  循环链表和单向链表相似，节点类型都是一样的。唯一的区别就是，在创建循环链表时，让其头部节点的next属性指向它本身
 *  head.next = head;
 *  这种行为会传导至链表中的每个节点，使得每个节点的next属性都是指向链表的头节点，换句话说，链表的尾节点指向头节点
 *  形成了一个循环链表
 */

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) && !(currNode.next.element === "head")) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}


