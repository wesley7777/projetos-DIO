

/* aplicando exemplo let e var
var firstName = 'João';
let lastName = 'Souza';

    if(firstName === 'João') {
        var firstName = 'Pedro';
        let lastName = 'Silva';
    }

console.log(firstName, lastName); */

// aplicando exemplo variável constante (const)

const FIRST_NAME = prompt("Seja bem vindo, qual o seu primeiro nome?"); // sempre deve ser inicializada
const SEGUNDO_NOME = prompt(`Ok, ${FIRST_NAME}, agora digite o segundo nome!`);
// FIRST_NAME = "SANTOS";  <--- voce nao pode reatribuir ou redeclarar o nome de uma constante;
 alert(`Olá, ${FIRST_NAME} ${SEGUNDO_NOME}, como vai?`);


