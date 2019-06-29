let j1 = "piedra";
let j2 = "tijera";


if (j1 === "piedra" && j2 === "tijera") {
    console.log("J1 gana");
} 
if (j1 === "papel" && j2 === "piedra") {
    console.log("J1 gana");
}
if (j1 === "tijera" && j2 === "papel") {
    console.log("J1 gana");
}
if (j1 === "piedra" && j2 === "papel") {
    console.log("J2 gana");
}
if (j1 === "papel" && j2 === "tijera") {
    console.log("J2 gana");
}
if (j1 === "tijera" && j2 === "piedra") {
    console.log("J2 gana");
}
if (j1 === "piedra" && j2 === "piedra") {
    console.log("Empate");
}
if (j1 === "papel" && j2 === "papel") {
    console.log("Empate");
}
if (j1 === "tijera" && j2 === "tijera") {
    console.log("Empate");
} else {
    console.log ("no son opciones de juego");
}

