const LibroCar= []

const agregar_carrito = 'addToCart'
const quitar_carrito ='removeFromCart'
const ver_carrito ='viewCart'

function viewCart(){
    console.log('Lista de Libros', LibroCar)
}

function AccionCarrito (action, newbook){
    switch(action){
        case agregar_carrito:
            LibroCar.push(newbook)
            break;
            
        case quitar_carrito:
            if(LibroCar.length === 0){
                console.log('Lo siento, no hay libros por eliminiar')
            }else{
                const removerLibro = LibroCar.pop()
                console.log(`Se removio el libro ${removerLibro}`)

            }
            break;
            
        case ver_carrito:
            viewCart()
            break;

            default:

            console.log('No se ha seleccinado una accion, por favor indica una ');           
    }
}

AccionCarrito(agregar_carrito, 'Libro 3')
AccionCarrito(ver_carrito)
AccionCarrito(agregar_carrito, 'Libro 4')
AccionCarrito(ver_carrito)
AccionCarrito(quitar_carrito)