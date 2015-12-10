/*******************************************************
    > File Name: List.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年10月23日 星期五 15时06分43秒
 ******************************************************/

/**
 * List
 *
 * constructor of the List
 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // init an array to store the element of the List
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

/**
 * append
 *
 * append an element to the List
 * @param element
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}

/**
 * find
 *
 * find if exists the element in List
 * @param element
 */
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

/**
 * remove
 *
 * remove target element if exists
 * @param element
 * @return {Boolean} result
 */
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt >= 0) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
    }
    return false;
}

/**
 * length
 *
 * size of the List
 * @return {Number} 
 */
function length() {
    return this.listSize;
}

/**
 * toString
 *
 * show the List elements
 * @return {Array}
 */
function toString() {
    return this.dataStore;
}

/**
 * insert
 *
 * insert an element in target place of the List
 * @param element
 * @param after
 * @return {Boolean} result
 */
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos >= 0) {
        this.dataStore.splice(insertPos + 1, 0, element);
        return true;
    }
    return false;
}

/**
 * clear
 *
 * clear the List
 *
 */
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = 0;
    this.pos = 0;
}

/**
 * contains
 *
 * if target element in List
 * @param element
 * @return {Boolean} result
 */
function contains(element) {
    for (var i = 0, len = this.dataStore.length; i < len; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    this.pos > 0 ? this.pos - 1 : this.pos;
}

function next() {
    this.pos < this.listSize - 1 ? this.pos + 1 : this.pos;
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    if (position >= 0 && position <= this.listSize) {
        this.pos = position;
    }
    throw new Error('invalid position!');
}

function getElement() {
    return this.dataStore[this.pos];
}

