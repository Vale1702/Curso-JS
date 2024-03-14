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
      username: "Estefany",
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

let user= prompt('Ingresa tu Usuario');
let pass=prompt('Ingresa tu contraseña')
 
let buscarUsuario= usersDatabase.find(usuario =>usuario.username==user)

console.log(`buscar usuario`,buscarUsuario)


if(buscarUsuario == undefined){
  console.log(`El usuario no existe`)
}
else if(user == buscarUsuario.username ){
  console.log(`El usuario existe`)

if(pass == buscarUsuario.password){
  console.log(`la contraseña es correcta`)
}else{
  console.log(`la contraseña es incorrecta`)
}
}

