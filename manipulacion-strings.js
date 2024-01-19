//String primitivo
const stringPrimitivo ='Soy un string primitivo.'
console.log(typeof stringPrimitivo)

const stringPrimitivoigual = String ('Soy un string primitivo tambien')
console.log (typeof stringPrimitivoigual)

//String objeto
const stringObjeto =new String('Soy un String objeto')
console.log (typeof stringObjeto)

//Acceder a caracteres
const saludo = 'hola. ¿Cómo estás?'
console.log (saludo [2])
console.log (saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacio = ' Hola mundo '
const saludoSinEspacio = saludoConEspacio.trim()
console.log (saludoSinEspacio)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace ('Mundo', '❤️')
console.log(nuevoSaludo)