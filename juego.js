const numSecreto = Math.floor( Math.random() * 10 +1);

const numJugador = parseInt (prompt("Adivina el numero secreto entre el 1 - 10"));

console.log(`Este es el numero con el que juegas ${numJugador}`);

if(numJugador === numSecreto){
    console.log("Felicidades, has adivinado el numero Secreto")
}else if (numJugador < numSecreto){
    console.log("El numero es menor, intenta de nuevo")
}else{
    console.log("El numero es mayor, intenta de nuevo")
}