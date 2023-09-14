//variaveis da forma da bolinha
let xBolinhaPosicaoInicial = 300;
let yBolinhaPosicaoInicial = 200;
let xBolinha = xBolinhaPosicaoInicial;
let yBolinha = yBolinhaPosicaoInicial;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha/ 2;

//variaveis da velocidade da bolinha
let velocidadeXYBolinha = 5;
let velocidadeXBolinha = velocidadeXYBolinha;
let velocidadeYBolinha = velocidadeXYBolinha;

function mostraBolinha (){
    circle(xBolinha,yBolinha,diametroBolinha);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
if(xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
    } 
    if(yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}

function bolinhaPresa() {
    if (keyIsDown(32)) {
     xBolinha = xBolinhaPosicaoInicial;
     yBolinha = yBolinhaPosicaoInicial;
   }
 }