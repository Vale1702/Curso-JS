/* Anatomia de un objeto 
Un objeto es una Estructura de datos que me ayuda a guardar valores en pares Key-value->  propiedad- valor. los objetos pueden tener funciones (metodos)

    objeto{
        propiedad = valor
        ` `
        propiedad:valor
        propiedad:valor
    }
*/


const persona={
    nombre :'Valentina',
    edad :28,
    direccion:{
        calle :'vallejo',
        ciudad : 'Tlalnepantla'
    },
    saludar(){
        console.log (`Hola, mi nombre es ${persona.nombre}`);
    }
}

console.log(persona);
console.log(persona.nombre);
persona.saludar()

// Esta es la manera para poder agregar otro atibuto dentro del objeto.
persona.telefono= '555 444 3333';
console.log(persona.telefono);


// Esta es la manera para poder agregar otro metodo dentro de un objeto.
persona.despedir=()=>{
    console.log(`Adios`);
}
persona.despedir()

// Para poder acceder a un atriburo de un objeto anidado, es de la siguiente manera.

console.log(persona.direccion.calle)

// para eliminar o quitar informacion del objeto que quede obsoleta se inicia con la palabra reservada "delete" se agrega el objeto y el atributo a quitar.

delete persona.telefono;

//NO se pueden BORRAR METODOS//

