function countDown() {
  const diasCasamento = new Date('7 September 2024 17:00:00');
  const dataAtual = new Date();
  const quantoTempo = diasCasamento.getTime() - dataAtual.getTime();
  const dias = Math.floor(quantoTempo / (24 * 60 * 60 * 1000));
  const horas = Math.floor(quantoTempo / (60 * 60 * 1000)) % 24;
  const minutos = Math.floor(quantoTempo / (60 * 1000)) % 60;
  const segundos = Math.floor(quantoTempo / 1000) % 60;
  const diasDom = (document.querySelector('.dias').innerHTML = dias);
  const horasDom = (document.querySelector('.horas').innerHTML = horas);
  const minutosDom = (document.querySelector('.minutos').innerHTML = minutos);
  const container = document.querySelector('.container_tempo');
  const chegou = document.querySelector('.chegou');
  const segundosDom = (document.querySelector('.segundos').innerHTML =
    segundos);

  const faltam = document.querySelector('.faltam');
  const container_tempo = document.querySelector('.container_tempo');
  const grandeDia = document.querySelector('#grandeDia');
  if (dias <= 0) {
    faltam.classList.add('desativado');
    container_tempo.classList.add('desativado');
    grandeDia.classList.add('ativo');
  }
}

setInterval(() => {
  countDown();
}, 1000);