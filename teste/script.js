const blocosTopicos = document.querySelectorAll('.cont-top');

blocosTopicos.forEach((bloco) => {
  const subtopicos = bloco.querySelectorAll('.text-sub');
  const btnAnt = bloco.querySelector('.btn-ant');
  const btnProx = bloco.querySelector('.btn-prox');

  let indiceAtual = 0;

  function atualizarSubtopico(novoIndice) {
    // 1. Remove a classe 'ativo' do subtópico atual (dispara a animação de desaparecer)
    subtopicos[indiceAtual].classList.remove('ativo');

    // 2. Atualiza o índice
    indiceAtual = novoIndice;

    // 3. Adiciona a classe 'ativo' no novo subtópico (dispara a animação de surgir)
    subtopicos[indiceAtual].classList.add('ativo');
  }

  // Evento de CLIQUE na seta PRÓXIMO
  if (btnProx) {
    btnProx.addEventListener('click', () => {
      let proximo = (indiceAtual + 1) % subtopicos.length;
      atualizarSubtopico(proximo);
    });
  }

  // Evento de CLIQUE na seta ANTERIOR
  if (btnAnt) {
    btnAnt.addEventListener('click', () => {
      let anterior = (indiceAtual - 1 + subtopicos.length) % subtopicos.length;
      atualizarSubtopico(anterior);
    });
  }
});