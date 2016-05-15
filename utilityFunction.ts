namespace Utility{
    export namespace Fees {
        export function CalculateLatefess(daylate:number):number{
            return daylate*.25;
        }
    }
        export function MaxBookAllowed(age:number):number {
            if(age<12) {
                return 3;
            } else{
                return 10;
            }
        }
         
         function privateFunc():void{
             console.log("this is private");
             return
         }
    
    export function Purge<T>(inventory: Array<T>):Array<T>{
        return inventory.splice(2,inventory.length);
    }
}