const greeting = function (name){
    return `Hi, ${name}`

}
 //Arrow function - explicit return
 const newgreeting = (name) =>{
     return `Hi, ${name}`
    
 }

//Arrow function - implicit return
 const newGreetingImplicit = name => `Hi, ${name}`
 const ImplicitwithParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

 const implicitParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

//lexical binding

const fictionalCharacter ={
    name: 'Tio Ben',
    messageFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    arrowFunction: (message)=>{
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.messageFunction('hola, mucho gusto')
fictionalCharacter.arrowFunction('Hola, Tio Ben')