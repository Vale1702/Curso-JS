// 1.- Calcula el saldo total (Usa el reduce para sacar el total del balance)

const transacciones=[
    {id:1, descripcion:'Botana', monto: -50},
    {id:1, descripcion:'Tanda', monto: 250},
    {id:1, descripcion:'Sueldo', monto: 1450},
    {id:1, descripcion:'Vasos', monto: -20},
    {id:1, descripcion:'Refrescos', monto: 60}
]

let totalBalance= transacciones.reduce((acc, transaccion)=> acc + transaccion.monto,0)

console.log(`Balance total ${totalBalance}`)
//2.- Encuentra el valor mas grande ya sea un egreso o ingreso

//Buscar el metodo ABS---
let montoMayor = transacciones.reduce((previus, currrent)=>
currrent.monto > previus.monto ? currrent : previus);

console.log(`La mayor transaccion es:`, montoMayor)

//3.- Muestra las transacciones de compra

const compras = transacciones.filter(transaccion => transaccion.monto < 0)

console.log(`Las compras fueron:`, compras)

//4.- Encuentra una transaccion por descripcion.

let transaccionPorDescripcion = transacciones.find(transaccion => transaccion.descripcion === 'Botana')

console.log('La transaccion por descripcion es:',transaccionPorDescripcion)

//5.- Encuentra el indice de una transaccion por monto

let transaccionPorMonto = transacciones.findIndex(transaccion => transaccion.monto === -20)
console.log('La transaccion por monto es:',transaccionPorMonto)

//6.- Actualizacion de la descripcion de una transaccion.

let actualizarDescripcion = transacciones.forEach(descripcionActual => console.log (transacciones.descripcion))

transacciones.forEach(transaccion => {
    if(transaccion.monto < 0){
        transaccion.descripcion = `Gastos: ${transaccion.descripcion}`
    }else {
        transaccion.descripcion=`Ingresos: ${transaccion.descripcion}`
    }
})

console.log('Transacciones Actualizadas', transacciones)