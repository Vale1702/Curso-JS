const owner='Lucy'
const address='DC'

function dogGreeting (owner, address){
    console.log(`Hi. I'm ${this.dogName} and live with ${owner} on ${address}`)
}

const newHouse = {
    dogName:'Rocket'
}
//Método con Call, mandas a llamar las variables
dogGreeting.call(newHouse, owner, address)

// Método con Apply, generas un array donde agregas las variables
const necesaryValues = [owner, address]
dogGreeting.apply (newHouse, necesaryValues)

//Método con Bind, parecido al call, pero este caso solo  ejecutamos la función.
const bind = dogGreeting.bind(newHouse, owner, address)
bind()


