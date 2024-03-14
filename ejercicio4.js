//Ejercicio A: Nombre, locacion, edad, ordenar de manera alfabetica y mostrar cuantos hay por locacion 

const personas=[
    {name:'Ivan', location:'Tlalnepantla', age:16},
    {name:'Erick', location:'Naucalpan', age:30},
    {name:'Santiago', location:'Atizapan', age:17},
    {name:'Spectre', location:'Tlalnepantla', age:25},
    {name:'Jesus', location:'Naucalpan', age:20},
    {name:'Maicol', location:'Tlalnepantla', age:40},
    {name:'Yasser', location:'Naucalpan', age:30},
    {name:'Alan', location:'Atizapan', age:22},
    {name:'Luis', location:'Atizapan', age:15},
    {name:'Rosa', location:'Naucalpan', age:28},
    {name:'Jesus', location:'Atizapan', age:13},
    {name:'Osva', location:'Atizapan', age:13}


];

personas.sort((a,b)=> a.name > b.name ? 1: -1);



//let locacion=Object.groupBy(personas, ({location}) =>location);

// let conteo = personas.filter(persona => persona.location === 'Atizapan').length;
// console.log(`hay ${conteo}  en Atizapan`)

// conteo1 =personas.filter(persona => persona.location === 'Naucalpan').length;
// console.log(`hay ${conteo1}  en Naucalpan`)

// conteo2 =personas.filter(persona => persona.location === 'Tlalnepantla').length;
// console.log(`hay ${conteo2}  en Tlalnepantla`)
console.log(personas[1].age)
let catLocaciones = []
let contador =0;
let contador2 =0;
let contador3 =0;
let mayorEdad =0;

 for (let i=0; i < personas.length; i ++){
    let locacionActual=personas[i].location
    
   let resultadoBusqueda= catLocaciones.find(locacion => locacion == locacionActual)
   if(resultadoBusqueda == undefined){
        catLocaciones.push(locacionActual)
    }
    else{
        console.log('locacion existente')
    }
    
    if(personas[i].location=='Atizapan' ) {
        contador++;
    }else if(personas[i].location=='Tlalnepantla'){
        contador2++;
    }else{
        contador3++;
    }
    if(personas[i].age >=18){
        mayorEdad++;
    }
   
    }
  

 console.log(personas)
 console.log(catLocaciones)
 console.log(`Existen ${contador}, de personas en Atizapan.
 Existen ${contador2}, de personas en Tlalnepantla.
 Existen ${contador3}, de personas en Naucalpan.
 Hay ${mayorEdad} personas mayor de 18 años de edad`)

