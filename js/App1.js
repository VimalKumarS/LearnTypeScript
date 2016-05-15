"use strict";
/// <reference path="utilityFunction.ts" />
var enum_1 = require('./enum');
var Classes_1 = require('./Classes');
var shelf_1 = require('./shelf');
function GetAllBooks() {
    var book = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enum_1.Category.Biography },
        { id: 2, title: 'A farewell to arms', author: 'Ernest Hemingway', available: false, category: enum_1.Category.fiction },
        { id: 3, title: 'I Know Why the caged Bird Sings', author: 'Maya Angelou', available: true, category: enum_1.Category.history }
    ];
    return book;
}
function printBook(book) {
    console.log(book.author);
}
var myBook = {
    id: 5,
    title: "title1",
    author: "auhtor",
    available: true,
    category: enum_1.Category.fiction,
    markDamaged: function (reason) { return console.log("damaged" + reason); }
};
var logDamage;
logDamage = function (damage) { return console.log(damage); };
var lib = new Classes_1.UniversityLibrarian();
lib.name = "S";
lib.assitCustomer("assitcustomer");
var ref = new Classes_1.RefernenceItem("Facts and Figure", 2013);
//ref.title="Facts and Figure";
//ref.year=2016;
ref.printItem();
var bookShelf = new shelf_1.default();
//# sourceMappingURL=App1.js.map