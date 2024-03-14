/*JS objetos y prototipos y programacion orientada a objetos funciona con herencia.
clases
funciones constructoras


metodos
    propiedades

    prototype
        metodos
        propiedades
*/

class Animal{
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    emitirSonido(){
        console.log('El animal emite un sonido')
    }
}

/* la extencion de la clase se puede utilizar para usar los mismos metodos y propiedades de una clase que ya existe, para no replicar.
'super' lo que hara es llamar a contructor de la clase padre, solicitando usar en la clase extendida en este caso nombre y tipo.
*/

class Perro extends Animal{
    constructor(nombre, tipo ,raza){
        super(nombre,tipo);
        this.raza=raza;
    }
    emitirSonido(){
        console.log('El perro ladra');
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
    
}

const perro1 = new Perro ('Rudy','Perro', 'Pitbull')

console.log(perro1)
perro1.correr();
perro1.emitirSonido();



