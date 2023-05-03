var idade = 60;
console.log(`Você tem ${idade} anos, de acordo com a lei,`);
if (idade < 16) {
    console.log("você não vota");
}
else if (idade < 18 || idade > 65) {
    console.log("seu voto é opcional");
}
else {
    console.log("seu voto é obrigatório");
}

