function media() {
    let nota1 = Number(window.prompt('Digite a primeira nota'));
    let nota2 = Number(window.prompt('Digite a segunda nota'));
    let nota3 = Number(window.prompt('Digite a terceira nota'));

    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');

    if (media >= 6) {
        resultado.innerHTML = "O aluno foi aprovado! Média: " + media;
    } else {
        let dif = 6 - media;
        resultado.innerHTML = "Aluno reprovado! Média: " + media + ". Faltaram " + dif + " ponto(s) para passar. Vai fazer o Se Liga!";
    }
}
