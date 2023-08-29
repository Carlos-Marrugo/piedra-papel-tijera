function aleatorio(min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🥌"
    } else if(jugada == 2){
        resultado = " Papel 🧻"
    } else if(jugada == 3){
        resultado = "Tijeras ✂️"
    }
    else{
        resultado = "MAL ELEGIDO"
    }
    return resultado 
}

//1 es piedra, 2 papel, 3 nes tijera
let jugador = 0
let pc = 0
let triunfo = 0
let perdida = 0

while(triunfo < 3 && perdida < 3){
    let pc = aleatorio (1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijeras")
    //alert("Elegiste " + jugador)
    
    alert("PC elige: "+ eleccion(pc))
    alert("Tu eliges: "+ eleccion(jugador))
    
    //COMBATE
    if(pc == jugador){
        alert("EMPATE")
        } else if(jugador == 1 && pc == 3)
        {
        alert("GANASTE")
        triunfo = triunfo + 1
        }  else if(jugador == 2 && pc == 1){
        alert("GANASTE")
        triunfo = triunfo + 1
        }  else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfo = triunfo + 1
        }else{
        alert("PERDISTE")
    }
}

alert("Ganaste " + triunfo + " veces. Perdiste "+ perdidas + " veces.")
