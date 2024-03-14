// Torneo algoritmico.

function ganadorDelTorneo(competiciones,resultados){
    const puntuacion={}
    let ganador=''
    for (let i=0; i < competiciones.length; i++){
       const [local, visitante] = competiciones[i] 
       const equipoGanador = resultados[i] === 0 ? visitante : local
    
       puntuacion[equipoGanador]= (puntuacion[equipoGanador] || 0) + 3
       
        if(!ganador || puntuacion[equipoGanador]> puntuacion[ganador]){
            ganador=equipoGanador
        } 
    } 
    return ganador
}
const competiciones=[
    ['JavaScript','C#'],
    ['C#','Python'],
    ['Python','JavaScript']
]

let resultados = [0,0,1]



console.log(ganadorDelTorneo(competiciones,resultados))