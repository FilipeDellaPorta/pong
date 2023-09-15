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
    verificaColisaoBorda();
    //verificaColisaoRaquete();
    colisaoRaqueteBiblioteca(xRaquete,yRaquete);
    colisaoRaqueteBiblioteca(xOponenteRaquete,yOponenteRaquete);
    mostraPlacar();
    marcaPontos();
}

