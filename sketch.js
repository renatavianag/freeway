function setup() {
  createCanvas(600, 450);
  somDaTrilha.loop();

}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostrarCarros();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  placar();
  marcaPontos();
  
 
}
