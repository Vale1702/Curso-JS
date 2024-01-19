// Tipo de dato primitivo - Inmutable
let numero =23
numero=numero + 10
console.log (numero)

let esVerdadero = true
esVerdadero = false
console.log (esVerdadero)

// Tipo de dato complejo - Mutable
let usuario = {nombre: 'Ova', edad:15}
usuario.edad=25
console.log(usuario)

let frutas =['manzana','pera']
frutas[0]=['sandia']
console.log(frutas)

function cambiarName(objeto){
    objeto.nombre='New Name'
}

let persona = {nombre:'Vale'}
cambiarName(persona)
console.log  (persona)