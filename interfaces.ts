import {Category} from './enum';

interface Book{
    id:number;
    title:string;
    author:string;
    available:boolean;
    category: Category;
    pages?:number;
    markDamaged?:DamageLooger;
    //(reason:string)=>void;
}

interface DamageLooger{
    (reason:string):void
}

interface Person{
    name:string;
    email: string;
}
interface Author extends Person{
    numBookPublished:number;
}
interface Librarian extends Person{
    department:string;
    assitCustomer:(custName:string) =>void;
}


interface Magazine{
    title:string;
    publisher:string;
}
export {Book,DamageLooger,Author,Librarian,Magazine};