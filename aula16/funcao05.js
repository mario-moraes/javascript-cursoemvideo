// fatorial através de recursividade da função:
// condicionais são 1! = 1; e n! = n.(n-1)!;

function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n*fatorial(n-1);
    }
}
console.log(`O fatorial de 5 é igual a ${fatorial(5)}.`);