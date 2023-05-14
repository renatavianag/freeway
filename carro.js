//variáveis dos carros
xCarros = [600, 600, 600, 600, 600, 600];
yCarros = [46, 110, 170, 240, 300, 360];
comprimentoCarros = [50, 50, 50, 50, 50, 50];
alturaCarros = [40, 40, 40, 40, 40, 40];
velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

function mostrarCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros[i],
      alturaCarros[i]
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
