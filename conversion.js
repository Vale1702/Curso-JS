// Conversion de typo explicito

const string ='42'
const integer = parseInt (string)
console.log (integer)
console.log (typeof integer)

const stringDecimal ='3.24'
const float = parseFloat(stringDecimal)
console.log (float)
console.log (typeof float)

const binary ='1010'
const decimal = parseInt(binary,2)
console.log (decimal)
console.log (typeof decimal)

// Conversion de typo implicito
const suma ='5'+3
console.log(suma)

const sumConBoolean= '3' + true
console.log (sumConBoolean)

const sumConNumber = 2 + true
console.log(sumConNumber)

const stringValue ='10'
const numberValue =10
const booleanValue =true
console.log('Si es string concatena')
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log('si es con número suma')
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log('------------')
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)
console.log('------------')

const numero ='596'
const numeroConvertido = parseInt(numero)

console.log (typeof numero)
console.log (typeof numeroConvertido)