// retornando número ímpar ou par:
function parimpar(n) {
    if (n % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
// "input" do usuario:
let numero = 20;

//chamada:

let resultado = parimpar(numero);

console.log(`O número ${numero} é ${resultado}!`);