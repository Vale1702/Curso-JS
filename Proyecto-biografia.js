// Biografia de personaje

function Swords (name,rank,zanpakuto){
    this.name = name
    this.rank = rank
    this.zanpakuto = zanpakuto
    this.isLeader= false

    this.displayInfo = function(){
        console.log(`Swords Information :
        Name: ${this.name}
        Rank: ${this.rank}
        Zanpakuto: ${this.zanpakuto}
        ${ this.isLeader? 'Leader: Yes':'Leader: No'}`)
  }  

  this.becomeLeader = function(){
    this.isLeader = true
    console.log(`${this.name} has become the leader of the Swords`)
  }
}
    const ulquiorra = new Swords ('Ulquiorra','4','Murciélago 🦇' )

    const aizen = new Swords ('Aizen','0','Kyōka Suigetsu 😈' )

    const nelliel = new Swords ('Nelliel','3','Gamuza ☠️' )

ulquiorra.displayInfo()
aizen.displayInfo()
nelliel.displayInfo()

aizen.becomeLeader()

ulquiorra.displayInfo()
aizen.displayInfo()
nelliel.displayInfo()