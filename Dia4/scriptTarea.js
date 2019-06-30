//      inicio; hasta donde llegaremos; como llegamos (sumanos o restando)
for(let i = 0; i<=10;i++){
    console.log(i);
}

/*    Crea un arreglo con los siguientes platillos: 

    1) "Empanada"
    2) "Tostada"
    3) "Garnacha"
    4) "Tamal"
    5) "Picadillo"

    1.-Mediante un ciclo for, muestra todos los platillos
       (recuerda la propiedad 'length')
    2.-Mediante for e if, muestra solo la "Garnacha" y el "Tamal"
    3.-Mediante for e if, muestra solo los elementos impares
    4.-Mediante solo ciclo for, muestra los elementos que sean pares	
*/

let platillos = ["empanada", "tostada", "garnacha", "tamal", "picadillo"];

//1
for(let i=0; i<platillos.length; i++){
    console.log(platillos[i]);
}

//2
let favs = [];
for(let i=0; i<platillos.length; i++){
    if(platillos[i] === "garnacha" || platillos[i] === "tamal"){
        favs.push(platillos[i]);
    }
}
console.log(favs);

//2 mas sencillo
console.log(platillos[2] + " y " + platillos[3]);

//3
let impares = [];
for(let i=0; i<platillos.length; i++){
    if((platillos[i].length)%2 === 1){
        impares.push(platillos[i]);
    }
}
console.log(impares);

//4
let pares = [];
for (let i = 0; i < platillos.length; i++) {
    if((platillos[i].length)%2 === 0){
        pares.push(platillos[i]);
    }
}
console.log(pares);