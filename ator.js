//variáveis ator
let xAtor = 100;
let yAtor = 410;
let comprimentoAtor = 40;
let alturaAtor = 40;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor() {
  if (yAtor < 0) {
    yAtor = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (yAtor > 410) {
    yAtor = 410;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarros[i],
      alturaCarros[i],
      xAtor + 20,
      yAtor + 20,
      20
    );
    if (colisao) {
      voltaPosicaoInicial();
      somDaColisao.play();
      if (meusPontos>0) {
        meusPontos -=1;
      }
      }
  }
}

function voltaPosicaoInicial() {
  yAtor = 410;
}

function placar() {
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(24);
  fill(color(128, 0, 0));
  text(meusPontos, width / 5, 29);
}

function marcaPontos() {
  if (yAtor < 10) {
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicaoInicial();
  }
}
