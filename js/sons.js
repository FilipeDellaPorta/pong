//variaveis dos sons do jogo

let raquetada;
let ponto;
let trilha;
let trilhaTocando = true;
let pontoTocando = true;
let raquetadaTocando = true;

//tocando os sons do jogo
function tocaTrilha(){
    if(!trilhaTocando){
        return;
    }

    trilha.loop();
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

// function tocaSom(som, ativo){
//     if (ativo) {
//         som.play();
//     }
// }

// tocaSom(trilha, trilhaTocando);
// tocaSom(ponto, pontoTocando);
// tocaSom(raquetada, raquetadaTocando);

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
