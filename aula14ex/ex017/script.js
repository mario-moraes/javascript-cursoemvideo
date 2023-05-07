function tabuada() {
    let num = Number(document.getElementById("txtn").value);
    let tab = document.getElementById("seltab");
    if (num == 0 || num < 0) {
        alert("[ERRO] por favor, digite um número maior que zero.");
    } else {
        tab.innerHTML = "";
        for (let fator = 1; fator <= 10; fator++) {
            let item = document.createElement("option");
                item.text = `${num} x ${fator} = ${num*fator}`;
            tab.appendChild(item);
        }
    }
}