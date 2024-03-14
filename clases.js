//Nueva forma de construir clases, es generar el molde del cual se van a construir diferentes objetos. Se inicia con la palabra reservada 'class' + nombre de la clase, se agregqa el metodo  constructor que define como se deben confirgurar las propiedades del objeto, puede srecibir argumentos para personalizar la iniciacion. Constructor, Metodos, Propiedaddes y los parametros para generar nuevas instancias.

class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
} 

const persona1= new Persona ('Carlos David', 27)
persona1.saludar();
