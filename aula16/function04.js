// calculando fatorial:

function fatorial(n) {
    let fato = 1;
    for (let c = n; c > 1; c--) {
        fato *= c;
    } 
    return fato;
}
console.log(`O fatorial de 15! é ${fatorial(15)}.`);