let nombre = "Gaby";
let edad = 28;
let casado = false;

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

// dias[4]="juevebes"; 
// console.log(dias[0]);
// console.log(dias[1]);
// console.log(dias[2]);
// console.log(dias[3]);
// console.log(dias[4]);
// console.log(dias[5]);
// console.log(dias[6]);
// console.warn("Ten cuidado!");
// console.log(dias);

for(let i=0; i<dias.length; i++){
    console.log(dias[i]);
}

let countries = ["México", "Bélgica", "Estados unidos", "Brasil"];

console.log(countries[0].length);
console.log(countries[1].length);
console.log(countries[2].length);
console.log(countries[3].length);

let longest = "";

for(let i = 0; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
        longest = countries[i];
    }
}

console.log(longest);

const numbers = [0, -5, 3, 9, -2, -3, -19];
let negatives = [];
let positives = [];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]>0) {
//         positives.push(numbers[i]);
//     }
// }
// console.log(positives);

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]<0) {
//         negatives.push(numbers[i]);
//     }
// }
// console.log(negatives);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]*numbers[i]);
}
