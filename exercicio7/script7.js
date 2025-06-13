// Variáveis globais para contagem
let contadorCliques = 0;

function inscrever() {
    // Incrementa o número de cliques
    contadorCliques++;

    // Atualiza a contagem de cliques na página
    document.getElementById('clicks').textContent = contadorCliques;

    // Verifica se já completou 10 cliques para exibir o emoji
    if (contadorCliques % 10 === 0) {
        document.getElementById('emoji').textContent = '◕‿◕'; // Exibe o emoji
    }
}

function zerarContagem() {
    // Reseta a contagem de cliques e atualiza a página
    contadorCliques = 0;
    document.getElementById('clicks').textContent = contadorCliques;
    document.getElementById('emoji').textContent = ''; // Remove o emoji
}
