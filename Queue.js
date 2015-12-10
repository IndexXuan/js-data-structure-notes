/*******************************************************
    > File Name: Queue.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
    > Created Time: 2015年10月28日 星期三 14时57分25秒
 ******************************************************/

/**
 *  队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按顺序排列的数据，
 *  先进先出，这点和栈不一样，在栈中，最后入栈的元素反而被优先处理，可以想象成在银行排队的人群，
 *  排在最前面的人第一个办业务，信赖的人只能在后面排队，直到轮到他们。
 *
 *  队列也是先进先出FIFO的数据结构，队列被用在很多地方，比如提交操作系统执行一系列进程，打印任务
 *  一些仿真系统用队列来模拟银行或杂货铺里排队的顾客。
 */

/**
 *  对队列的操作主要是向队列插入新的元素和删除队列中的元素。插入操作也叫做入队，删除操作也叫做
 *  出队，入队操作在队尾插入新元素，出队操作删除队头的元素。
 *  队列另一个重要的方法就是读取队头元素, 我们还想直到队列中存储了多少元素，可以使用length属性
 *  满足该要求，要想清空队列中的元素，我们可以使用clear方法来实现。
 */

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var resStr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        resStr += this.dataStore[i] + '\n';
    }
    return resStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}

// test
var q = new Queue();
q.enqueue("1");
q.enqueue("2");
q.enqueue("3");
print(q.toString());
q.dequeue();
print(q.toString());
print("Front of the queue: " + q.front());
print("Back of the queue: " + q.back());

// 使用队列解决：　方块舞的舞伴分配问题
/** 
 *  前面我们说过，经常用队列模拟排队的人，下面我们使用队列来模拟跳方块舞的人，当男男女女来到
 *  舞池，他们按照自己的性别排成两队，当舞池中有地方空出来时，选两个队列中的第一个人组成舞伴，
 *  他们身后的人向前移动一步形成新的队首。当一对舞伴迈入舞池时，主持人会大声喊出它们的名字，
 *  当一对舞伴走出舞池，且两排队伍中有任意一队没人时，主持人会把这个情况告诉大家。
 *／

/** 
 *  F Allison McMillan
 *  M Frank Opotz
 *  M Mason McMillan
 *  M Clayton Ruff
 *  F Cheryl Ferenback
 *  M Raymond Williams
 *  F Jennifer Ingram
 *  M Bryan Frazer
 *  M David Durr
 *  M Danny Martin
 *  F Autora Adney
 */

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = read('dancers.txt').split('\n');
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(" ");
        var sex = dancers[0];
        var name = dancer[1];
        if (sex === 'F') {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    print("The dance parters are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        putstr("Female dancer is : " + person.name);
        person = males.dequeue();
        print(" and the male dancer is : " + person.name);
    }
    print();
}

// test
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    print(femaleDancers.front().name + " is waiting to dance.");
}

if (!maleDancers.empty()) {
    print(maleDancers.front().name + " is wating to dance.");
}

/** 
 *  优先队列
 *  在一般情况下，从队列中删除元素，一定是率先入队的元素。但是也有一些使用队列的应用
 *  ，在删除元素时不必遵循先进先出的约定，这种应用需要使用一个叫做优先队列的数据结构来模拟
 *
 *  在优先队列中删除元素，需要考虑优先权的限制，比如医院急诊室的候诊室，就是一个采取优先队列的例子
 *  当病人进入候诊室时，分诊护士会评估患者的严重程度，然后给优先级代码，高优先级的患者先于低优先级
 *  的患者就医。
 */

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var resStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        resStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return resStr;
}

// 优先队列的实现
var p = new Patient('Smith', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach",6);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("patient being treated: " + seen[0].name);
print("patiend waiting to ben seen: ");
print(ed.toString());
//下一轮
var seen = ed.dequeue();
print("Patient being treated : " + seen[0].name);
print("Patient waiting to be seen: ");
print(ed.toString());
















