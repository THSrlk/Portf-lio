function media() {
    let nota1 = Number(window.prompt('Digite a primeira nota'));
    let nota2 = Number(window.prompt('Digite a segunda nota'));
    let nota3 = Number(window.prompt('Digite a terceira nota'));
   
    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = document.querySelector('#resultado');
    
    if (media >= 6) {
        resultado.innerHTML = '<p>O resultado é ' + media.toFixed(2) + '. Aluno aprovado!</p>';
    } else {
        let falta = (6 - media).toFixed(2);
        resultado.innerHTML = '<p>O resultado é ' + media.toFixed(2) + '. Aluno reprovado! Faltam ' + falta + ' pontos para passar. Vai fazer o se liga!</p>';
    }

    console.log(resultado);
}
