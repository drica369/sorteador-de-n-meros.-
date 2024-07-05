function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (de >= ate) {
      alert(`Você colocou o número ${de} no campo "Do número" sendo maior que o número ${ate} no campo "Até o número", portanto o jogo será reiniciado!`);
      reiniciar();
      alterarStatusBotao();
      return;
  }

  if (quantidade > (ate - de + 1)) {
      alert(`Quantidade de número solicitado ${quantidade} é maior que o intervalo entre ${de} e ${ate}, escolha outro valor. O jogo será reiniciado!`);
      reiniciar();
      alterarStatusBotao();
      return;
  }

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
          numero = obterNumeroAleatorio(de, ate);
      }
      sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  let palavraNumerosSorteados = quantidade > 1 ? 'Números sorteados' : 'Número sorteado';
  resultado.innerHTML = `<label class="texto__paragrafo">${palavraNumerosSorteados}: ${sorteados} </label>`;
 
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao');
  } else {
      botao.classList.remove('container__botao');
      botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}