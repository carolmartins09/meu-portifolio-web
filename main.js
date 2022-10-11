let gatinho = document.querySelector("#gatinho");
let textoGatinhos = document.querySelector(".gatinho-texto");

gatinho.addEventListener("click", abrirTextoGatinhos);

// function mostrarTextoGatinhos() {
//     textoGatinhos.style.display = "block";
// }


function abrirTextoGatinhos() {
    if (textoGatinhos.style.display === "block") {
        textoGatinhos.style.display = "none";
    } else {
        textoGatinhos.style.display = "block";
    }
}

let estrelas = document.querySelector("#estrelas");
let textoEstrelas = document.querySelector(".estrelas-texto");

estrelas.addEventListener("click", abrirTextoEstrelas);

function abrirTextoEstrelas() {
    if (textoEstrelas.style.display === "block") {
        textoEstrelas.style.display = "none";
    } else {
        textoEstrelas.style.display = "block";
    }
}