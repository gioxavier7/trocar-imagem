"use strict"

const botaoTrocaImagem = document.getElementById('trocar-img');
const inputImagem = document.getElementById('img');
const body = document.querySelector('body');


const imagens = {
    gta1: "var(--imagem1)",
    gta2: "var(--imagem2)",
    gta3: "var(--imagem3)",
    gta4: "var(--imagem4)",
    gta5: "var(--imagem5)"
};


inputImagem.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const valorDigitado = inputImagem.value.trim().toLowerCase();
        
        if (imagens[valorDigitado]) {
            body.style.backgroundImage = imagens[valorDigitado];
        } else {
            alert("Imagem não encontrada! Digite algo entre gta1 e gta5.");
        }
    }
});

botaoTrocaImagem.addEventListener("click", () => {
    const chaves = Object.keys(imagens)
    const aleatorio = chaves[Math.floor(Math.random() * chaves.length)]
    body.style.backgroundImage = imagens[aleatorio]
})
