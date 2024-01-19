const caricatura ={
    nombre:'Vaca y Pollito'
}

function recuerdo (personaje){
    console.log(`${this.nombre} era mi caticatura favorita.
    Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caricatura, 'Vaca')
recuerdo.bind(caricatura, 'Pollito')
