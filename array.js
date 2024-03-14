// 1.- new array () or array()
//const frutas = Array ('piña', 'pera', 'uva')
 //console.log(frutas)

// const number =[1, 2, 3, 4, 5]
//  console.log(number)


//2.- Array literal syntax

// const numero=[4]
// console.log(numero)

// const arrayVacio =[]
// console.log(arrayVacio)

// //array con strings
// const deportes=['Futboll', 'basquetball','tenis']
// console.log(deportes)

// arrary mixtos

// const ingredientes=[
//     'Flor',
//     true,
//     23,
//     {ingredientes: 'Leche', cantidad: '1 cuchara'
//  }
// ]
// console.log(ingredientes)

//Mutabilidad

// frutas.push('melon')
// console.log(frutas)

// //inmutabilidad
// const newFrutas= frutas.concat(['naranja', 'kiwi'])
// console.log(frutas)
// console.log(newFrutas)

// //Comprobar si un Array es un Array

// const isArray= Array.isArray(frutas)
// console.log(isArray)


//Sumar todos los elementos de un array

// const number=[1, 2, 3, 4, 5, 6]
// let sum = 0

// for (let i=0; i < number.length; i++){
//     sum += number[i]
// }

// console.log(sum)

//Metodos que modifican el arrray original (Mutabilidad)

//push

const paises = ['Canada', 'Mexico','Korea']
const paisesNuevos = paises.push('China', 'Japon')

console.log(paises)
console.log(paisesNuevos)

// remueve el ultimo elemento del array
const paisesModificado = paises.pop()
console.log(paises)
console.log(paisesModificado)


//shift(), 

const colors = ['Red', 'Blue','Purple']
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)


//unshift()

const newColors= colors.unshift('Pink','Yellow')

console.log(colors)
console.log(newColors)


//Array with splice()

const vegetales =['Aguacate','Cebolla','Brocoli','Pimienta']

const removedVegetales = vegetales.splice(2, 1, 'Tomate', 'Zanahoria')

console.log(vegetales)
console.log(removedVegetales)

//Reverse

const numbers=[1, 2, 3, 4, 5, 6]
const reversedNumber = numbers.reverse()

console.log(numbers)
console.log(reversedNumber)

// sort() with number
// el array queda de la siguiente manera : [1, 18, 34, 4, 62] dado que JS revisa los numeros y los pasa de manera String, debido a que se esta hablando de cadena de texto JS revisa el unicode de los strings y de acuerdo a eso va realizando el orden.

const numbers1 = [4, 18, 1, 62, 34]
const sortedNumbers = numbers1.sort() 

console.log (numbers1)
console.log (sortedNumbers)

//Orden con numeros
 const numbers2 = [4, 18, 1, 62, 34]
 const sortedNumbers2 = numbers2.sort((a,b) => a - b)
 //4 - 18 = -14, 18 - 1 =17, realiza una resta con cada elemento del array, si este sale negativo quiere decir que esta correcto, en este caso que el 4 es menor que el 18, así sucesivamente hasta terminar con todas las variables.

 console.log(numbers2)
 console.log(sortedNumbers2)

 //Sort() with strings - UTF-16

 const cities= ['Mexico', 'Tokio','Japon','Korea','Alemania']
 const sortCities = cities.sort((a,b)=> a > b ? 1: -1)

 console.log(cities)
 console.log(sortCities)

 // fill ()

 const ages = [16, 25, 78, 12, 8, 30]
 console.log(ages.fill (0, 2, 4))
 console.log(ages.fill (15, 1))
 console.log(ages.fill (15))


// map()

const number = [1, 2, 3, 4, 5]
const squareNumbers= number.map(num => num * num)

console.log(number)
console.log(squareNumbers)

// forEach()

const colors1 = ['red', 'pink', 'blue']
const iteraColors = colors.forEach (color => console.log (colors1))

console.log(colors1)
console.log(iteraColors)


// Calcular grados Fahrengeit a Celcius
const tempFahrengeit = [90, 68, 102, 130]
const celcius= tempFahrengeit.map(num => (5/9) * num - 32 )


console.log(tempFahrengeit)
console.log(celcius)

// Suma de un array

const numberSum = [1, 2, 3, 4, 5]
let sum = 0
numberSum.forEach( number => 
    {
        sum += number
    })

console.log(numberSum)
console.log(sum)

// filter()

const newNumber =[ 1,2,3,4,5,6,7,8,9,10]
const parNum = newNumber.filter(number => number % 2 === 0)

console.log (newNumber)
console.log(parNum)

// reduce()
let acumulador=0
const reduceNumber = [1,2,3,4]
const sum1 = reduceNumber.reduce((acumulador, currentValue) => acumulador + currentValue, 0)

console.log(reduceNumber)
console.log(sum1)

//Caso 1

const words=['hola','rosa','bye','banana','rosa','pay','gato']

const wordsFrecuency = words.reduce((acumulador, currentValue)=>{
    if(acumulador[currentValue]){
        acumulador[currentValue]++
    }
    else{
        acumulador[currentValue]=1
    }
    return acumulador
}, {})


console.log(wordsFrecuency)

//Ejercicio: Promedio
let acumulador1=0
const grades =[20, 49, 67,92, 100, 100, 89,94, 98,54,32]

const passingGrades = grades.filter(grades => grades >= 70)

const reduceProm =passingGrades.reduce((sum, grade)=> sum + grade, 0/ passingGrades.length)

console.log(grades)
console.log(passingGrades)
console.log(reduceProm)

// find()
const multiple5 = [5, 10, 15, 20] 

const firstNum = multiple5.find(number => number > 10)

console.log(multiple5)
console.log(firstNum)

// finsIndex ()
const randomNum = [5,12,76,25,30]
const indexNum = randomNum.findIndex(number => number > 50)

console.log(randomNum)
console.log(indexNum)

// concat() une dos o mas arrays Opcion 1, solo para 2 arrays


const codigoMorse1= ['....', '---']// H O
const codigoMorse2=['.-..','.-'] //L A

mensaje = codigoMorse1.concat(codigoMorse2)
console.log(mensaje)

// concat() opcion 2, más arrays

mensajeMorse = [].concat(codigoMorse1, codigoMorse2)

console.log(codigoMorse1)
console.log(codigoMorse2)
console.log(mensajeMorse)

// Combinacion con spread operator

function combinacionMensajeMorse (codigoMorse1, codigoMorse2){
    console.log( [...codigoMorse1, ...codigoMorse2])
}
combinacionMensajeMorse(codigoMorse1, codigoMorse2)

//
const numbers3 = [1, 2, 3]
const strings = 'string'

combinacionMensajeMorse(numbers3,strings)

// join() 

const mensajeMorseString = mensajeMorse.join(' e')

console.log(mensajeMorseString)


// .every() → Retorna true si todos los elementos del arreglo cumplen la función callback

const edades= [21,25,30,19]
const sonAdultos= edades.every(edad => edad > 18)

console.log(edades)
console.log(sonAdultos)
//.some() → Retorna true si al menos un solo del arreglo cumplen la función callback.

const edadMayorA30= edades.some(edad => edad > 29)

console.log(edadMayorA30)

// indludes()

const numeros1= [1,2,3,4,5]

const resultado1= numeros1.includes(9)

console.log(resultado1)

//indexOf()

const frutas1=['manzana', 'mango','uva','cereza']

const index1=frutas1.indexOf('uva')
console.log(index1)

const index2=frutas1.indexOf('mora')
console.log(index2)

//lastIndexOf()

const number1=[2,4,6,8,20,6]
const ultimoNumero=number1.lastIndexOf(6)
console.log(ultimoNumero)

// slice()

const animales=['hormiga','pato','gato','rana','pez','perro']
console.log(animales.slice(3))
console.log(animales.slice(2, 5))
console.log(animales.slice(-2))
console.log(animales.slice())


//Spread operator

const arrayOriginal=[1,2,3,4,5]
const copiaDeArray=[...arrayOriginal]

console.log(arrayOriginal)
console.log(copiaDeArray) 

//Combinacion de Arrays

const array1=[1,2,3]
const array2=[4,5,6]
const combinacionArray=[...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinacionArray)

//Creando arrays con elementos adicionales.

const baseArray=[7,8,9]
const arrayConElementoAdicional=[...baseArray, 10,11,12]

console.log(baseArray)
console.log(arrayConElementoAdicional)

// parametros a una funcion

function suma (a, b, c){
    return a + b + c
}

const numerosSuma=[5, 10, 15]
const resultado= suma(...numerosSuma)

console.log(resultado)


// Array bidimencinales. son un conjunto de datos
let array1D=[1,2,3]// Unidimencional
let array2D=[[1,2,3], [4,5,6],[7,8,9]]// Bidimencional

let matriz=[
[1,2,3],
[4,5,6],
[7,8,9]
]

matriz[1][1]=10
console.log(matriz)

let valor=matriz[1][1]
console.log(valor)

// Operacion

for(let i=0; i < matriz.length; i++){
    for(let j=0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}

function encontarElemento(matriz, elemento){
    for(let i=0; i < matriz.length; i++){
        for(let j=0; j<  matriz[i].length; j++){
            if(matriz[i][j] === elemento){
                return true
            }
        }
    }
    return false
}
console.log(encontarElemento (matriz,9))