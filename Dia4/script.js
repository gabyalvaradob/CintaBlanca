function pedirUber(a, b) {
    console.log("Tu conductor va en camino a " + a);
    console.log("Vamos a " + b);
}

let partida = "C 22 México, Mérida"
let destino = "Plaza La Isla"

pedirUber(partida, destino);


function cobrar(monto) {
    let montoFinal = 0;
    montoFinal = monto * 1.16;
    console.log("Se cargará a tu tarjeta un monto de $" + montoFinal);
}

cobrar(110);

function jugar(j1, j2) {
    let ganador = "";
    if (j1 === 'piedra' && j2 === 'piedra') {
        ganador = "Nadie fue empate";
    } else if (j1 === 'papel' && j2 === 'papel') {
        ganador = "Nadie fue empate";
    } else if (j1 === 'tijeras' && j2 === 'tijeras') {
        ganador = "Nadie fue empate";
    } else if (j1 === 'piedra' && j2 === 'tijeras') {
        ganador = "El jugador 1";
    } else if (j1 === 'papel' && j2 === 'piedra') {
        ganador = "El jugador 1";
    } else if (j1 === 'tijeras' && j2 === 'papel') {
        ganador = "El jugador 1";
    } else if (j1 === 'piedra' && j2 === 'papel') {
        ganador = "El jugador 2";
    } else if (j1 === 'papel' && j2 === 'tijeras') {
        ganador = "El jugador 2";
    } else if (j1 === 'tijeras' && j2 === 'piedra') {
        ganador = "El jugador 2";
    } else {
        ganador = "Nadie, se repite, no aplica un valor!"
    }
    console.log("El ganador es " + ganador);
}

jugar('piedra', 'piedra');


let numeros = [0,1,2,3,4,5,6,7,8,9,10,11,15,18,21];

function impares() {
    
}