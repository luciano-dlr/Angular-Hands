
// Los decordadores no son mas que solo funciones que pueden modificar
//el comportamiento de clases, propiedades y metodos.


function classDecorator<T extends {new(...args:any[]):{}}>(
    
    constructor: T
){
    return class extends constructor{

        newProperty = 'New Property';
        hellos = 'override';

    }
}


@classDecorator
export class SuperClass {
    
    public myProperty:string = 'abc123';
     
    print(){
        console.log('Hola Mundo ')
    }

}

// Definicion de la clase
console.log(SuperClass)


const myClass = new SuperClass()

//Instancia de la clase
console.log(myClass)