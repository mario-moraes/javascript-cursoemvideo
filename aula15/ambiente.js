let num = [5, 8, 9, 3];
    // a contagem inicia do 0, então os quatro elementos aqui são na verdade 0, 1, 2 e 3.
    // para adicionar um elemento em um indicie especifico do array: num[4] = 6;

//ou se quiser adicionar como ultimo elemento:
num.push(6);

console.log(`Nosso vetor é ${num}.`);

// saber comprimento do array. Length é um atributo e não um método, por isso não possui parenteses no final.
num.length;

// colocando os elementos em ordem crescente:
num.sort();

// sabendo uma posição especifica através de keys:
num[0];

console.log(`Nosso vetor após sort é ${num}.`);

console.log (`O comprimento do array é de ${num.length} elementos.`);

console.log(`O primeiro valor é ${num[0]}.`)

// buscando uma chave através de um valor:
console.log(`O valor buscado "9" está na chave ${num.indexOf(9)}.`);
// caso o valor não seja encontrado o programa retorna o valor "-1".