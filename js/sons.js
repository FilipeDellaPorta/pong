//variaveis dos sons do jogo

let raquetada;
let ponto;
let trilha;
let trilhaTocando = true;
let pontoTocando = true;
let raquetadaTocando = true;

//tocando os sons do jogo

function tocaSom(som, ativo){
    if (ativo) {
         som.play();
     }
}


 function silenciaSons(){
     if(keyIsDown(77)){
        trilhaTocando = false;
        pontoTocando = false;
        raquetadaTocando = false;
        trilha.pause();
        ponto.stop();
        raquetada.stop();
     } 
}

function reativaSons(){
    if(keyIsDown(78)){
        trilhaTocando = true;
        pontoTocando = true;
        raquetadaTocando = true;
    }
}