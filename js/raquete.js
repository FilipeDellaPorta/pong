//variaveis da forma da minha raquete e raquete do oponente
let xRaquete =  0;
let yRaquete = 150;
let larguraRaquete = 15;
let alturaRaquete = 100;
let xOponenteRaquete = 585;
let yOponenteRaquete = 150;
let yVelocidadeRaquete = 5;

function mostraRaquete(x,y){
    rect(x,y,larguraRaquete,alturaRaquete);
}

function movimentaRaquete(){
    if(keyIsDown(UP_ARROW)){
        yRaquete -= yVelocidadeRaquete;
        constrain 
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += yVelocidadeRaquete;
    }
    yRaquete = constrain(yRaquete,0,300);
}

function verificaColisaoRaquete(){
    if (xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
        velocidadeXBolinha *= -1;
    } 
    if (xBolinha + raioBolinha > xOponenteRaquete && yBolinha - raioBolinha < yOponenteRaquete + alturaRaquete && yBolinha + raioBolinha > yOponenteRaquete){
        velocidadeXBolinha *= -1;
    } 
}