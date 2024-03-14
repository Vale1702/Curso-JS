//Juego de Adivina la palabra

    let palabraSecreta="dulce"
    let intentos=3

    function validacion(suposicion, palabraSecreta){
        if(suposicion.toLowerCase()===palabraSecreta){
           return true
        }
            return false
    }

    function juego(){
        alert("Hola, has iniciado el juego de Adivina la palabra");
        alert("Tienes 3 intentos para adivinar la palabra");
        alert("Es algo que comemos");
        
        while(intentos > 0){
            let suposicion= prompt("Ingresa tu palabra");

            if(validacion (suposicion, palabraSecreta)){
                alert("Felicidades! adivinaste la palabra Secreta.")
                break;
            }else {

            intentos --;

            if(intentos > 0){
            alert(`La palabra es incorrecta,  Tienes : ${intentos} intentos restantes`);
            
            } else {
                alert(`Ya no tienes intentos, la palabra secreta es: ${palabraSecreta}`);
            }
        }
      }
    }

    juego();