// Null

const snoopy=null
console.log (snoopy)
console.log (typeof snoopy) 

//Undefined
let name
console.log (name)

//Symbol: valores unicos y que no cambien

const uniqueId= Symbol ('id')
const symbol1 = Symbol (1)
const symbol2 = Symbol (1)
console.log (symbol1 === symbol2)

const ID=Symbol ('id')
let user ={}
user[ID] ='1234'
console.log (user)

//BigInt: sirve para calculos matematicos o expresiones grandes

const bigNumber = 94817475837174391759428102900n
console.log (bigNumber)

const ParticulasDelUniverso =10000000000000000000n
console.log(ParticulasDelUniverso)
