//variaveis da forma da minha raquete e raquete do oponente
let xRaquete =  -5;
let yRaquete = 150;
let larguraRaquete = 15;
let alturaRaquete = 100;
let xOponenteRaquete = 590;
let yOponenteRaquete = 150;
let yVelocidadeRaquete = 5;
let yVelocidadeOponenteRaqueteAI;
//variavel utilizando a biblioteca p5.collide2d
let colidiu = false;

//funcoes para mostrar e movimentar a raquete e verificar colisao com a raquete
function mostraRaquete(x,y){
    rect(x,y,larguraRaquete,alturaRaquete);
}

function movimentaRaquete(){
    if(keyIsDown(87) || keyIsDown(68)){
        yRaquete -= yVelocidadeRaquete;
    }
    if(keyIsDown(83) || keyIsDown(65)){
        yRaquete += yVelocidadeRaquete;
    }
    yRaquete = constrain(yRaquete,0,300);
}

// function verificaColisaoRaquete(){
//     if (xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
//         velocidadeXBolinha *= -1;
//         tocaSom(raquetada, raquetadaTocando);
//     } 
//     if (xBolinha + raioBolinha > xOponenteRaquete && yBolinha - raioBolinha < yOponenteRaquete + alturaRaquete && yBolinha + raioBolinha > yOponenteRaquete){
//         velocidadeXBolinha *= -1;
//         tocaSom(raquetada, raquetadaTocando);
//     } 
// }



function verificaColisaoRaqueteBiblioteca(x,y){

    colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametroBolinha);
    if (colidiu){
        velocidadeXBolinha *= -1;
        tocaSom(raquetada, raquetadaTocando);
    }
}

function movimentaRaquetePlayer2(){
    if(keyIsDown(UP_ARROW)){
        yOponenteRaquete -= yVelocidadeRaquete;
    }
    if(keyIsDown(DOWN_ARROW)){
        yOponenteRaquete += yVelocidadeRaquete;
    }
    yOponenteRaquete = constrain (yOponenteRaquete, 0, 300);
}

function movimentaOponenteRaqueteAI(){

        yVelocidadeOponenteRaqueteAI = yBolinha - yOponenteRaquete -alturaRaquete/2 -30;
        yOponenteRaquete += yVelocidadeOponenteRaqueteAI;
 
        
}

