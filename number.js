// 1 Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log (typeof entero, typeof decimal)

//2. Notacion cientifica 
const cientifico =5e3

// 3 Infinitos y NaN
const infinito = Infinity
const noNumero = NaN

/*operaciones aritmeticas

1. Suma, Resta, Multiplicacion, Division*/
const suma = 1+2
const resta = 4-1
const multiplicacion = 3*5
const division = 16/2

//Modulo y exponenciacion
const modulo =15 % 8
const exponenciacion = 2**3

// Precision
const resultado= 0.1 + 0.2
console.log (resultado)
//toFixed es utilizado para indicar la cantidad de valores despues del punto
console.log (resultado.toFixed(2))
console.log (resultado === 0.3)

//Operaciones avanzadas

const raizcuadrada = Math.sqrt (16)
console.log(raizcuadrada)
const valorAbsoluto = Math.abs (-7)
console.log(valorAbsoluto)
const aleatorio =Math.random()
console.log (aleatorio)
