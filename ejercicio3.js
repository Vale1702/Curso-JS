// Juego de cartas
const deck=['♥','♦','♠','♣','♥','♦','♠','♣','♥','♦','♠','♣','♥','♦','♠','♣','♥','♦','♠','♣']


//Algoritmo de Fisher-Yates
function shuffleDeck(){
    for (let i=deck.length - 1; i > 0; i-- ){
        const j = Math.floor(Math.random() * (i + 1));
        [ deck [i],  deck[j]] =[ deck [j],  deck[i]]
    }
}


function dealCards(numCard){
 const dealCards=deck.splice(0,numCard)
 return dealCards
}


shuffleDeck()

const player1=dealCards(4)
const player2=dealCards(4)
const player3=dealCards(4)

console.log('Player 1:', player1 )
console.log('Player 2:', player2 )
console.log('Player 3:', player3 )

// Ejercicio 4

const tempFahrengeit = [90, 68, 102, 130]
const celcius= tempFahrengeit.map(num => (5/9) * num - 32 )


console.log(tempFahrengeit)
console.log(celcius)

//Ejercicio 5
let aleatorio=Math.floor(Math.random() * 21 )

const participantes =[
    {id:1, name:'Ivan', ticket:001 },
    {id:5, name:'Luis', ticket:002 },
    {id:10, name:'Rosa', ticket:004 },
    {id:20, name:'Jesus', ticket:006 }
]

let ganador = participantes.find(person => person.id == aleatorio )

if(ganador != undefined){
    console.log(`'El ganador es:' ${ganador.name}`)

}else{
    console.log(`Id no encontrado`)
}

console.log(ganador, aleatorio)

