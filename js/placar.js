//variaveis do placar
let meusPontos = 0;
let oponentePontos = 0;
let xPlacarPlayer1 = 150;
let xPlacarPlayer2 = 450;
let yPlacar = 50;

function mostraPlacar(){
    fill(255);
    text(meusPontos, xPlacarPlayer1 , yPlacar);
    text(oponentePontos, xPlacarPlayer2 , yPlacar);
}

function marcaPontos(){
    if (xBolinha > 591){
        meusPontos += 1;
    }
    if (xBolinha < 9){
        oponentePontos +=1;
    }
}