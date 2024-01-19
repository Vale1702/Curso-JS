function Rocket (name){
    this.name =name
    this.message= function(){
        console.log('🚀')
    }
}

const falconRocket = new Rocket('Falcon')
const HeavyRocket = new Rocket('Heavy')

console.log(falconRocket.name)
console.log(HeavyRocket.message())
//

const MensajePers = () =>'Good bye, good luck'

function Rocket (name, onwMessage){
    this.name =name
    this.message= onwMessage
}

const falconRocket = new Rocket('Falcon', MensajePers)
const HeavyRocket = new Rocket('Heavy','See you later')

console.log(falconRocket.name)
console.log(falconRocket.message())//

//

const RocketArrowFunction =(name, onwMessage) =>({
        name:name,
        LauchMessage: onwMessage
    })

const MensajePers = () =>'Hi, good luck'
const Falcon9Rocket = RocketArrowFunction ( 'Falcon 9', MensajePers)

console.group (Falcon9Rocket.name)
console.group (Falcon9Rocket.LauchMessage())

