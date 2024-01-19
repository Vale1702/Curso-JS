// 1. Creacion de string
const primerOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = `Comillas simples`

// 2. Concatenacio: Opcion +

const direccion='Calle 134'
const ciudad = 'Mexico'
const direccionCompleta ='Mi direccion es ' +direccion+ ciudad
console.log (direccionCompleta)

const direccionCompletaEspacio='Mi direccion es ' +direccion+' '+ ciudad
console.log(direccionCompletaEspacio)

// 3. Concatenacion: Template Literals

const nombre ='Vale'
const pais ='🇲🇽'
const presentacion =`Hola, soy ${ nombre} de ${pais}`
console.log(presentacion)

//4. Concatencion: Join()
const primerParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇲🇽'
const Pensamiento = [primerParte, segundaParte, terceraParte]
console.log (Pensamiento.join (' '))

// Concatenacion: Concat()
const hobbie1 ='🏌️‍♀️'
const hobbie2 ='🎧'
const hobbie3 ='🎮'
const hobbies ='Mis hobbies son: '.concat(hobbie1,',',hobbie2,',',hobbie3)
console.log (hobbies)

//Caracteres de escape
//const whatDoIDo ='I'm software Engineer'

//1 Escape alternativo
const escapeAlternativo ="I'm software Engineer"

//2. Barra invertida
const barraInvertida = 'I\'m software Engineer'

// 3. Template literals
const escapeCommillaInvertida = `I'm software Engineer`

//Escritura de Strings Largos
/*
Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.
*/

 const poema=   'Las rosas son rojas,\n'+
                'Las violetas son azules,\n'+
                'Caracter inesperado,\n'+
                'En la linea 86.'
console.log (poema)

const poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'

console.log (poema2)
const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`
console.log(poema3)