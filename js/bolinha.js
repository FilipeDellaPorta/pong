//variaveis da forma da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha/ 2;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

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