function preload() {
    trilha = loadSound("./assets/sounds/trilha.mp3");
    ponto = loadSound("./assets/sounds/ponto.mp3");
    raquetada = loadSound("./assets/sounds/raquetada.mp3");
}

let larguraTela = 600;
let alturaTela = 400;

function setup() {
    createCanvas (larguraTela, alturaTela);
    trilha.loop(); //desativado para trabalhar em paz
}

function draw() {
    background(0);
    mostraBolinha();
    mostraRaquete(xRaquete,yRaquete);
    mostraRaquete(xOponenteRaquete,yOponenteRaquete);
    movimentaBolinha();
    bolinhaPresa();
    pararBolinha();
    movimentaRaquete();
    movimentaRaquetePlayer2();
    movimentaOponenteRaqueteAI();
    verificaBolinhaColisaoBorda();
    //verificaColisaoRaquete();
    verificaColisaoRaqueteBiblioteca(xRaquete,yRaquete);
    verificaColisaoRaqueteBiblioteca(xOponenteRaquete,yOponenteRaquete);
    mostraPlacar();
    marcaPontos();
    silenciaSons();
    reativaSons();
}

// function windowResized() {
//     larguraTela = windowWidth / 3;
//     alturaTela = windowHeight / 2;
//     resizeCanvas(larguraTela, alturaTela);
// }