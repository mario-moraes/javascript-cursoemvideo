function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res"); 

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Inserção inválida, verifique os dados e tente novamente.");
    }
    else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto"); 

        if (fsex[0].checked) {
            genero = "homem";
                if (idade >=0 && idade <= 10) {
                    img.setAttribute("src", "imagens/bebe-m.jpg");
                }
                else if (idade < 21) {
                    img.setAttribute("src", "imagens/jovem-m.jpg");
                }
                else if (idade < 50) {
                    img.setAttribute("src", "imagens/adulto-m.jpg");
                }
                else {
                    img.setAttribute("src", "imagens/velho-m.jpg");
                }
        } 
        else if (fsex[1].checked) {
            genero = "mulher";
            if (idade >=0 && idade <= 10) {
                    img.setAttribute("src", "imagens/bebe-f.jpg");
                }
                else if (idade < 21) {
                    img.setAttribute("src", "imagens/jovem-f.jpg");
                }
                else if (idade < 50) {
                    img.setAttribute("src", "imagens/adulto-f.jpg");
                }
                else {
                    img.setAttribute("src", "imagens/velho-f.jpg");
                }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Você é ${genero} e tem ${idade} anos!`;
        res.appendChild(img);
    }
}