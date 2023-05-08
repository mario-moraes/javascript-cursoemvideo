// soma com parâmetros pré definidos:
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
} 
// "input" do usuario:
let numero1 = 20;
let numero2 = 50;

// chamada:
let resultado = soma(numero1, numero2);

// log:
    if (resultado %2 == 0) {
        console.log(`A soma entre ${numero1} e ${numero2} é igual a ${resultado} e é par.`);
    } else {
        console.log(`A soma entre ${numero1} e ${numero2} é igual a ${resultado} e é ímpar.`);
    }

// adicionando a soma a um array:
var iteration = [3, 4, 5, 8];
    console.log(`array original: [${iteration}]`);
iteration.sort();
iteration.push(resultado);
    console.log(`Resultado da iteração: ${iteration}.`);