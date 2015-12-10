/*******************************************************
    > File Name: List-spec.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
 ******************************************************/

var names = new List();
names.append('1');
names.append('2');
names.append('3');
names.append('4');

console.log(names.getElement());
console.log(names.find('3'));
console.log(names.contains('1'));

