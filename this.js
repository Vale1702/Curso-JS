//Enlace implicito

const house ={
    dogName: 'Firulais',
    DogGreeting : function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
console.log (house.dogName)
house.DogGreeting()

//Enlace Explicito
function DogGreeting(){
    console.log(`Hi, I'm ${this.dogName}`)
}
const newHouse = {
    dogName: 'Rocket',
}
DogGreeting.call(newHouse)

//
function newGreeting(owner, address){
    console.log(`Hi, I'm ${this.dogName} and I'm live with ${owner} on ${address}`)
}

const owner = 'Lucy'
const address = 'Avenue 123'
newGreeting.call (newHouse, owner,address)