

// export class Person {

//     public name: string ;
//     private address: string;

//     constructor(name:string,address:string){
//         this.name = name;
//         this.address = address;
//     }

// }

export class Person {

    // public name: string ;
    // private address: string;

    constructor( 
        public firstName:string,
        public lastName:string,
        private address:string = 'No Adress'
        ){}

}


// CLASE ENTERIOR

// export class Hero extends Person {


//     constructor (
//         public alterEgo:string,
//         public age:number,
//         public realName:string,
//     ){
//         super(realName,'New York')
//     }

// }


//CLASE SIGUIENTE 

export class Hero  {

    // public person:Person;

    constructor (
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
        // this.person = new Person(realName)
    }

}

const tony = new Person('tony','stark','Nueva york')

const ironman = new Hero('IronMan',45,'Tony',tony)

console.log(ironman)