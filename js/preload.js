//variaveis dos sons do jogo

let raquetada;
let ponto;
let trilha;
let trilhaTocando = true;

//tocando a trilha do jogo
function tocaTrilha(){
    if(!trilhaTocando){
        return;
    }

    trilha.loop();
}

 function silenciaTrilha(){
     if(keyIsDown(77)){
        trilhaTocando = false;
        trilha.stop();
     } 
}
