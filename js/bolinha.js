//variaveis da forma da bolinha
let xBolinhaPosicaoInicial = 300;
let yBolinhaPosicaoInicial = 200;
let xBolinha = xBolinhaPosicaoInicial;
let yBolinha = yBolinhaPosicaoInicial;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha/ 2;
let bolinhaMovendo = true;

//variaveis da velocidade da bolinha
let velocidadeXYBolinha = 5;
let velocidadeXBolinha = velocidadeXYBolinha;
let velocidadeYBolinha = velocidadeXYBolinha;

//funcoes para mostrar a bolinha, mover a bolinha, soltar a bolinha e verificar a colisao da bolinha com a borda
function mostraBolinha (){
    circle(xBolinha,yBolinha,diametroBolinha);
}

function movimentaBolinha(){
    if(!bolinhaMovendo){

    return;
    }
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaBolinhaColisaoBorda(){
if(xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
    } 
    if(yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}

function bolinhaPresa(){
    if (keyIsDown(32)) {
     xBolinha = xBolinhaPosicaoInicial;
     yBolinha = yBolinhaPosicaoInicial;
     meusPontos = 0;
     oponentePontos = 0;
   }
 }

 function pararBolinha(){
    if(keyIsDown(80)){
        bolinhaMovendo = false;
    }
    if(keyIsDown(67)){
        bolinhaMovendo = true;
    }
 }