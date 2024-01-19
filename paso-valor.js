 //Paso por valor
 let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z
console.log (x,y,z,a,b,c)

 a = 12
 b = 'Platzi'
 c = undefined

 //Paso por referencia -- Tipo de dato complejo
 let fruta =['manzana']
 fruta.push('pera')
 console.log (fruta)

 let panes =['🥐']
 let copiaPanes = panes
 panes.push('🍞')
 console.log (panes,copiaPanes)


let frutas ={
    naranja:'🍊'
}
let vegetales = frutas
vegetales.naranja = '🥑'
console.log(frutas)



let ropa={
    blusa:'👚'
}

ropa.pantalon="👖"
let copiaRopa=ropa
ropa.tenis='🎈'
console.log(ropa,copiaRopa)
