/*******************************************************
    > File Name: iterator-List.js
    > Author: IndexXuan
    > Mail: indexxuan@gmail.com
 ******************************************************/

// 好处: 不用关心List底层用什么实现， 只需关心迭代本身
for (names.front(); names.currPos() < names.length(); names.next()) {
    print(names.getElement());
}

// 利用列表管理影碟租赁
var movieList = new List();
for (var i = 0; i < movies.length; i++) {
    movieList.append(movie[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            print(list.getElement()['name'] + ", " + list.getElement()['movie']);
        } else {
            print(list.getElement());
        }
    }
}

var customers = new List();

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, value);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        print(movie + " is not available.");
    }
}

// test
var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customes);
print('\nCustomer Rentals: \n');
displayList(customers);









