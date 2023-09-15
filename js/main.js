function setup() {
    createCanvas (600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    mostraRaquete(xRaquete,yRaquete);
    mostraRaquete(xOponenteRaquete,yOponenteRaquete);
    movimentaBolinha();
    bolinhaPresa();
    movimentaRaquete();
    //movimentaRaquetePlayer2();
   // movimentaOponenteRaqueteAI();
    verificaBolinhaColisaoBorda();
    //verificaColisaoRaquete();
    verificaColisaoRaqueteBiblioteca(xRaquete,yRaquete);
    verificaColisaoRaqueteBiblioteca(xOponenteRaquete,yOponenteRaquete);
    mostraPlacar();
    marcaPontos();
}

