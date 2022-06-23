function calculadora(){
    const operacao = prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)');
    
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('insira o segundo valor:'));
    let resultado

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
    }

    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
    }

    function novaOperacao() {7
        let opcao = prompt('Deseja fazer nova operacao?\n 1 - sim\n 2 - não');

        if(opcao == 1) {
            calculadora();
        } else if (opcao == 2){
            alert('Até mais!');
        } else ('digite uma opção válida!')
            novaOperacao();
    }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }
}


calculadora()