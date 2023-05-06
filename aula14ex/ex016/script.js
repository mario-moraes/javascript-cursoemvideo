function contar() {
    let ini = Number(document.getElementById("num1").value);
    let fim = Number(document.getElementById("num2").value);
    let passo = Number(document.getElementById("passo").value);
    let res = document.getElementById("res");
    
    if (ini == 0 || fim == 0 || passo == 0 || passo < 0) {
        alert("[ERRO] verifique os dados e tente novamente");
    } 
    else {
        res.innerHTML = "Contador: <br>";
            if (ini < fim) { 
                // contagem crescente
                for (let contador = ini; contador <= fim; contador += passo) {
                    res.innerHTML += ` ${contador} `;
                }
            } else { 
                // contagem decrescente
                for (let contador = ini; contador >=fim; contador -= passo) {
                    res.innerHTML += ` ${contador} `;
                    }
                }
    }
};
