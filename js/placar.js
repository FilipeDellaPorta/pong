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

//tentado usar o setTimeout para corrigir o problema da marcação de pontos quando a bolinha fica presa
//mas o que acontece é que ele só atrasa a contagem e as vezes mesmo zerando os pontos com a funcao
//dentro do js bolinha chamada bolinhaPresa() ele acaba contabilizando estes pontos dentro do que 
//seria uma "nova partida"
function marcaPontos(){
    if (xBolinha > 591){
       // setTimeout(function(){
        meusPontos += 1;
        tocaSom(ponto, pontoTocando);
       // }, 1000);
    }
    if (xBolinha < 9){
       // setTimeout(function(){
        oponentePontos +=1;
        tocaSom(ponto, pontoTocando);
       // }, 1000); 
    }
}