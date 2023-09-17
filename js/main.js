function preload(){
    trilha = loadSound("./assets/sounds/trilha.mp3");
    ponto = loadSound("./assets/sounds/ponto.mp3");
    raquetada = loadSound("./assets/sounds/raquetada.mp3");
}

function setup() {
    createCanvas (600, 400);
    tocaTrilha();
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
}

