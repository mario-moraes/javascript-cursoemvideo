let valores = [7, 9, 1 , 8, 3, 2, 10, 6, 2, 4, 5];
console.log(`o array é igual a ${valores}.`);
/* Percurso para exibição de vetores através de uma estrutura de repetição for tradicional.

    console.log(`O array é ${valores}. Logo:`);

    for (let pos = 0; pos < valores.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}.`);
    } 
*/

// utilizando uma sintaxe mais simples da ecmascript recentes:

    for(let pos in valores) {
        console.log(`A posição ${pos} possui valor ${valores[pos]}.`);
    }