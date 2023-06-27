
//Los genericos pueden ser cualquier letra <T> <A> <B>
// Se utilizan para especificar que deben ser el mismo tipo de dato 
// Para no utilizar la mala practicar de especificar el tipo :any
export function whatsMyType<T>(argument:T):T{

    

    return argument;
}


const amIString = whatsMyType<string>('Hola Mundo')
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6]);



console.log(amIString.split(' '));
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))






