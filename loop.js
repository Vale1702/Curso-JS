 /*For Nos ayuda a iterar por cada elemento que venga en una lista en la consola
for (variable; condición; incremento){
    código a ejecutar
}
*/

// let list =["eat","sleep","code","reapet"]
// for(let i = 0; i < list.length; i++){
//     console.log(list[i])
// }


/* For ech, es muy similar al metodo for, lo que hace es en una sintaxis mas chica y explicita generas una funcion y esta se repite por cada uno de los elementos que exista dentro de una lista, ejemplo de un array.

array.forEach((item) => {
    código a ejecutar
})

*/

// let list = ["eat","sleep","code","reapet"];

// list.forEach((item)=>{
//     console.log(item);
// })

/* for of: Por cada elemento de cierta cosa, se va a iterar hasta que se cumpla el loop que se busca.

se utilizan en objetos iterables
for off arrays, string que terminan siendo una lista de[salgo]

for(variable of objeto){
    código
}
*/

// let canasta =["manzanas", "bananas","uvas","mangos"]
// for (fruta of canasta){
//     console.log(fruta)
// }

/* for in: se utiliza para poder iterar en objetos enumerables, ejemp: objeto.
for in --> objetos
propiedades = valor

array, strings
    item

for (variable in objeto){
    código
}
*/

// const listaDeCompras ={
//     manzana:4,
//     pera:4,
//     naranja:3,
//     uva:2
// }

// for (fruta in listaDeCompras){
//     console.log(fruta)
// }

// for (fruta in listaDeCompras){
//     console.log(`${fruta} : ${listaDeCompras[fruta]}`)
// }

/*for while es un ciclo que se repite siempre y cuando sea verdadero.
while(condicion){
    codigo
}
*/

// let contador =0;

// while (contador < 10){
//     console.log(contador)
//     contador ++
// }

/* do while: primero se ejecuta el codigo antes de validar la condicion, mientras que el while primero valida la condicion antes de ejecutar el codigo.

do{
    codigo
    }
    while(condicion)

*/

let contador = 0;

do{
    console.log(contador)
    contador ++;
}while (contador <19);