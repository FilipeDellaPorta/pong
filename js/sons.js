//variaveis dos sons do jogo

let raquetada;
let ponto;
let trilha;
let trilhaTocando = true;
let pontoTocando = true;
let raquetadaTocando = true;

//tocando a trilha do jogo
function tocaTrilha(){
    if(!trilhaTocando){
        return;
    }

    trilha.loop();
}

 function silenciaSons(){
     if(keyIsDown(77)){
        trilhaTocando = false;
        pontoTocando = false;
        raquetadaTocando = false;
        trilha.stop();
        ponto.stop();
        raquetada.stop();
     } 
}

function tocaPonto(){
    if(!pontoTocando){
        return;
    }
    ponto.play();
}

function tocaRaquetada(){
    if(!raquetadaTocando){
        return;
    }
    raquetada.play();
}