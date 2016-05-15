/// <reference path="utilityFunction.ts" />
import {Category} from './enum';
import {Book,DamageLooger,Author,Librarian} from './interfaces'
import {UniversityLibrarian,RefernenceItem} from './Classes'
import Shelf from './shelf'

function  GetAllBooks() : Book[] {
     let book=[
        {id:1,title: 'Ulysses',author:'James Joyce',available : true,category:Category.Biography},
        {id:2,title: 'A farewell to arms',author:'Ernest Hemingway',available : false,category:Category.fiction},
        {id:3,title: 'I Know Why the caged Bird Sings',author:'Maya Angelou',available : true,category:Category.history}
    ];
    
    return book;
}

function printBook(book:Book) :void{
    console.log(book.author);
}

let myBook: Book = {
    id:5,
    title:"title1",
    author:"auhtor",
    available:true,
    category:Category.fiction,
    markDamaged:(reason:string) => console.log("damaged" + reason)
};

let logDamage :DamageLooger;
logDamage = (damage:string)=> console.log(damage);

let lib:Librarian = new UniversityLibrarian();
lib.name="S";
lib.assitCustomer("assitcustomer")


let ref= new RefernenceItem("Facts and Figure",2013);
//ref.title="Facts and Figure";
//ref.year=2016;
ref.printItem();


let bookShelf:Shelf<Book> = new Shelf<Book>();



