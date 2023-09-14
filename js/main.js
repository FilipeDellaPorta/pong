function setup() {
    createCanvas (600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    mostraRaquete(xRaquete,yRaquete);
    mostraRaquete(xOponenteRaquete,yOponenteRaquete);
    movimentaBolinha();
    movimentaRaquete();
    verificaColisaoBorda();
    //verificaColisaoRaquete();
    colisaoRaqueteBiblioteca(xRaquete,yRaquete);
    colisaoRaqueteBiblioteca(xOponenteRaquete,yOponenteRaquete);
}

