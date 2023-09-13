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
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += yVelocidadeRaquete;
    }
}