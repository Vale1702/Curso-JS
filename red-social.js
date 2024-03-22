//

const usersDatabase = [
    {
      username: 'andres',
      password: '123',
    },
    {
      username: 'caro',
      password: '456',
    },
    {
      username: 'mariana',
      password: '789',
    },

  ];
  
  const usersTimeline = [
    {
      username: "Caro",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];
function login(usuario,clave){
let user= prompt('Ingresa tu Usuario');

let pass=prompt('Ingresa tu contraseña')
 
let buscarUsuario= usersDatabase.find(usuario =>usuario.username +'1' ==user  )

console.log(`buscar usuario`, buscarUsuario)
console.log(user,'usuario')

if(buscarUsuario == undefined){
  console.log(`El usuario no existe`)
}
else if(user == buscarUsuario.username ){
  console.log(`Bienvenid@ ${buscarUsuario.username}`)

if(pass == buscarUsuario.password){
  console.log('')
}else{
  console.log(`la contraseña es incorrecta`)
}
}


// let usuario2=usersTimeline.find(user2 => user2.username == user)

// console.log(usuario2.username,'Usuario2')

// if(usuario2 == undefined){
//   console.log(`El usuario no existe`)
// }
// else if(user == usersTimeline.username){
//   console.log(`Tu Timeline es: ${usuario2.username}`)
// }else{
//   console.log('')
// }

}
login();