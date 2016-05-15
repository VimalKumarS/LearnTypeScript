/**
 * Created by vimal on 5/14/2016.
 */

class HelloWord {
    constructor(public message: string){
        
    }
}

var hello = new HelloWord("hello world");
console.log( hello.message)

function GetAllBooks(){
    let book=[
        {title: 'Ulysses',author:'James Joyce',available : true,category:Category.Biography},
        {title: 'A farewell to arms',author:'Ernest Hemingway',available : false,category:Category.Biography},
        {title: 'I Know Why the caged Bird Sings',author:'Maya Angelou',available : true,category:Category.Biography}
    ];
    
    return book;
}

function LogFirstAvailable(books) :  void{
    let numberOfBooks : number =books.length;
    let firstAvailable : string ="";
    for(let currentBook of books){
        
        if(currentBook.available){
            firstAvailable=currentBook.title;
            break;
        }
    }
    
    console.log(numberOfBooks);
    console.log(firstAvailable)
}
enum Category { Biography,Poetry,fiction,history,children}
const allBooks=GetAllBooks();



LogFirstAvailable(allBooks);

let stringarr : string[] = ["here","are","strings"]
let strarr2 : Array<string> =['more','strings','here']
let mytuple :[number,string]=[25,'truck']
let firstt= mytuple[0]


function getBookTitleByCategory(categoryFilter :Category):Array<string> {
    const filterTitle : string[] =[]
    const allBooks=GetAllBooks();
     for (let currnetBook of allBooks){
         if(currnetBook.category === categoryFilter){
             filterTitle.push(currnetBook.title)
         }
     }
    return filterTitle;
}

function publicationMessage(year: number) :string {
    return 'Date published: ' + year;
}


function CreateCustomer(name: string , id: number):void{
    console.log('Creating Customer' + name);
}

let publishFunc : (someYear: number) =>string;
publishFunc=publicationMessage;
let message : string = publishFunc(2016)

function GetTitles(author:string):string[];
function GetTitles(available:boolean):string[];
function GetTitles(BookProperty:any):string[] {
    const allBooks= GetAllBooks();
    const foundTitles:string[] =[];
    if(typeof BookProperty =='string'){
        
    }
    if(typeof BookProperty =='boolean'){
        
    }
    
    return foundTitles;
}

interface Duck{
    walk : ()=>void;
    swim: ()=>void;
    quack: ()=> void;
}

interface Book{
    id:number;
    title:string;
    author:string;
    pages?:number;
    markDamaged:(reason:string)=>void;
}