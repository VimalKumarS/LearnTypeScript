import {Book,DamageLooger,Author,Librarian} from './interfaces'

class UniversityLibrarian implements Librarian{
    name:string;
    email:string;
    department:string;
    assitCustomer(custName: string){
        console.log(this.name    + custName);
    }
}


class RefernenceItem{
    title: string;
    private year:number;
    private _publisher:string;
    static dept:string="Research";
    constructor(newTitle?:string, newYear?:number){
        console.log('Creating a new refernceItem..');
        this.title=newTitle;
        this.year=newYear;
    }
    
    printItem():void {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(RefernenceItem.dept);
    }
    
    get publisher():string{
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher:string){
        this._publisher=newPublisher;
    }
}

class Encyclopedia extends RefernenceItem{
    edition:number;
}


export { UniversityLibrarian,RefernenceItem };