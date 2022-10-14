let iconesInteresses = document.querySelectorAll(".icone");
//let textosInteresses = document.querySelectorAll(".textos");

function mostraTexto (idTextosInteresses){

    let textosInteresses = document.querySelector(idTextosInteresses);

    textosInteresses.classList.remove("display-none");
}


for (let i = 0; i < iconesInteresses.length; i++) {

    const botao = iconesInteresses[i];
    const icone = botao.classList[0]
    const idTextosInteresses = `#texto-${icone}`;

    botao.onclick = function () {
        mostraTexto(idTextosInteresses);
    }
}







// function mostraTexto(idTextoInteresses) {
//     idTextoInteresses.classList.toggle("display");
// }

// let contador = 0;

// while (contador < iconesInteresses.length) {

//     const botao = iconesInteresses[contador];
//     const icone = botao.classList[1];
//     const idTexto = `#texto-${icone}`;

//     botao.onclick = function () {
//         mostraTexto ("idTexto");
//     }

//     contador = contador + 1
// }








// let gatinho = document.querySelector("#gatinho");
// let textoGatinho = document.querySelector(".gatinho-texto");
// let estrelas = document.querySelector("#estrelas");
// let textoEstrelas = document.querySelector(".estrelas-texto");
// let gamer = document.querySelector("#gamer");
// let textoGamer = document.querySelector(".gamer-texto");

// gatinho.addEventListener("click", abrirTextoGatinhos);
// function abrirTextoGatinhos() {
//     textoGatinhos.classList.toggle("display");
// }

// estrelas.addEventListener("click", abrirTextoEstrelas);
// function abrirTextoEstrelas() {
//     textoEstrelas.classList.toggle("display");
// }

// gamer.addEventListener("click", abrirTextoGamer);
// function abrirTextoGamer() {
//     textoGamer.classList.toggle("display");
// }