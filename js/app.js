/**
 * Created by vimal on 5/14/2016.
 */
var HelloWord = (function () {
    function HelloWord(message) {
        this.message = message;
    }
    return HelloWord;
}());
var hello = new HelloWord("hello world");
console.log(hello.message);
function GetAllBooks() {
    var book = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Biography },
        { title: 'A farewell to arms', author: 'Ernest Hemingway', available: false, category: Category.Biography },
        { title: 'I Know Why the caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Biography }
    ];
    return book;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(numberOfBooks);
    console.log(firstAvailable);
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["fiction"] = 2] = "fiction";
    Category[Category["history"] = 3] = "history";
    Category[Category["children"] = 4] = "children";
})(Category || (Category = {}));
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
var stringarr = ["here", "are", "strings"];
var strarr2 = ['more', 'strings', 'here'];
var mytuple = [25, 'truck'];
var firstt = mytuple[0];
function getBookTitleByCategory(categoryFilter) {
    var filterTitle = [];
    var allBooks = GetAllBooks();
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currnetBook = allBooks_1[_i];
        if (currnetBook.category === categoryFilter) {
            filterTitle.push(currnetBook.title);
        }
    }
    return filterTitle;
}
function publicationMessage(year) {
    return 'Date published: ' + year;
}
function CreateCustomer(name, id) {
    console.log('Creating Customer' + name);
}
var publishFunc;
publishFunc = publicationMessage;
var message = publishFunc(2016);
function GetTitles(BookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof BookProperty == 'string') {
    }
    if (typeof BookProperty == 'boolean') {
    }
    return foundTitles;
}
//# sourceMappingURL=app.js.map