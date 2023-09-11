//variaveis da forma da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
if(xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
    } 
    if(yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}