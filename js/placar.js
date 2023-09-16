//variaveis do placar
let meusPontos = 0;
let oponentePontos = 0;
let xMeusPontos = 150;
let xOponentePlayer2 = 450;
let yPontos = 50;
let xPlacarMeusPontos = 130;
let xPlacarOponentepontos = 430;
let yPlacar = 35;
let larguraPlacar = 40;
let alturaPlacar = 20;

function mostraPlacar(){
    textAlign(CENTER);
    textSize(16);
    stroke(255);
    fill(color(255,99,71));
    rect(xPlacarMeusPontos, yPlacar, larguraPlacar, alturaPlacar);
    rect(xPlacarOponentepontos, yPlacar, larguraPlacar, alturaPlacar);
    fill(255);
    text(meusPontos, xMeusPontos, yPontos);
    text(oponentePontos, xOponentePlayer2, yPontos);

}

function marcaPontos(){
    if (xBolinha > 591){
        meusPontos += 1;
        tocaPonto();
    }
    if (xBolinha < 9){
        oponentePontos +=1;
        tocaPonto();
    }
}