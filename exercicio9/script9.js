//fução que vai somar os valores
function identificar(){
    //declaração em variaveis
    let num1 = 0;
    let num2 = 0;
    
    //entrada de dados do usuario
    num1 = Number(window.prompt('Digite um número: '));
    num2 = Number(window.prompt('Digite outro número: '));

    //a variavel de dados recebe o resultado da soma das variaveis num1 e num2
    let identificação = num1 + num2;


    //mostra o resultado pro usuario
    alert(identificação);
    
        //verifica se o resultado da soma é maior ou menor que 10
    if(identificação > 10){
        //caso seja maior que 10, mostra a frase abaixo pro usuario
        alert("Não desista, tudo vai dar certo.");
        //caso seja menor que 10 mostra a frase pro usuario
    } else {
        alert("Você logo chegará aonde almeja.");
    }
}