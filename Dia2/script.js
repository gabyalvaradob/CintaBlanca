//alert("si sirve!");

const nombre = "Gaby"; //const significa que es una constante y no puede cambiar
let edad = 28; //let es la forma moderna de declarar variables, var si se puede usar pero es arcaico
let mayorDeEdad = true;

let x = 7;
let y = 8;
let suma = edad + x;

console.log(nombre, edad);
console.log(suma);
console.log("Yucatán");

document.write("Hola, mi nombre es " + nombre + " y me faltan " + x + " años para llegar a " + suma);

if (edad >= 18) { // === para decir que estrictamente sin iguales, compara valores y tipo de variable
    mayorDeEdad = true;
    console.log("Soy mayor de edad");
} else {
    mayorDeEdad = false;
    console.log("Soy menor de edad");
}

let sumas = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = y / x;
let modulo = 26 % 5;

console.log(sumas);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

if (x % 2 === 0) {
    console.log(x + " es un numero par");
} else {
    console.log(x + " es impar");
}

// for (let i = 0; i<=10; i++) {
//     console.log(i);
// }

//100 a 1
for (let i = 100; i >= 1; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}