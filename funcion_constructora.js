/*let persona={
nombre:'Valentina',
apellido:'Jimenez',
edad:28
}*/

// Funcion constructora.

function Persona(nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

const persona1 = new Persona('David','Martinez',26);
console.log(persona1)

//agregar propiedad nueva al objeto, se manda a llamar a la instancia para agregar la propiedad. 

persona1.nacionalidad='Mexicano';

const persona2 = new Persona('Oswaldo','Jimenez', 26)
console.log(persona2)
// Para agregar un metodo o propiedad que sea compartido, se genera de la siguiente manera.

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar();
persona2.saludar();