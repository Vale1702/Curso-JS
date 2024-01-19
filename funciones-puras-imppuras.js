//funciones puras
function sum(a,b){
return a + b
}


function square (x){
    return x*x
}

function addTen (y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log (finalResult)

//Funcion impura
function sum(a,b){
    console.log ('A: ', a)
    return a + b
    }

let total = 0

function sumConEfecto(a){
    total +=a
    return total
}

function addTem (y){
    return y + 10
}