// Gera um número aleatório entre 1 e 100
let aleatorio = parseInt(Math.random() * 100) + 1;
let computador = document.querySelector("#resultado"); // Corrigido para "resultado"
let jogador;

function pensar() {
  jogador = Number(window.prompt("Digite um número entre 1 e 100"));

  if (jogador !== aleatorio) {
    if (jogador > aleatorio) {
      computador.innerHTML = '<p>Você errou, tente um número menor!</p>';
    } else {
      computador.innerHTML = '<p>Você errou, tente um número maior!</p>';
    }
  } else {
    computador.innerHTML = '<p>Você acertou, parabéns!</p>';
  }
}
