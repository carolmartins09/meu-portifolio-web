let iconesInteresses = document.querySelectorAll(".icone");

for (let i = 0; i < iconesInteresses.length; i++) {

    const botao = iconesInteresses[i]
    const idTextosInteresses = botao.id

    botao.onclick = function() {
        mostraTexto(idTextosInteresses)
    }

}

let descricoesInteresses = {
    "texto-gatinhos": "Tenho filhos felinos e atualmente vivem comigo o Zyon, o Iron e a Aurora, além do Snow, meu primeiro gatinho que já virou estrelinha. Eles são minha maior paixão.",
    "texto-estrelas": "Sou apaixonada por assuntos relacionados a ciência, principalmente astrofísica e muito fã de Carl Sagan. Leio muitos livros sobre o assunto e meu preferido é 'O mundo assombrado pelos demônios', do qual ele é o autor. Tenho uma tatuagem com a frase <span style = 'font-style: italic;'> We are made of stars stuff</span>.",
    "texto-gamer": "olá",
    "texto-naruto": "Acompanho animes desde de criança, Naruto, Attack on Titan e Demon Slayer são meus preferidos.",
    "texto-planta": "Além de mãe de pet, também sou mãe de planta e vivo na eterna luta de fazer as verdinhas sobreviverem em um apartamento.",
    "texto-yoga":"Pratico yoga a alguns anos e é minha atividade"
}

function mostraTexto(idTextosInteresses) {
    
    let texto = document.querySelector(".texto-interesses");
    let divInteresses = document.querySelector(".caixa-textos");

    divInteresses.classList.remove("interesses-textos");

    texto.innerHTML = descricoesInteresses(idTextosInteresses) || " ";

}




// function mostraTexto (idTextosInteresses){

//     let textosInteresses = document.querySelector(idTextosInteresses);

//     textosInteresses.classList.toggle("display-block");
// }


// for (let i = 0; i < iconesInteresses.length; i++) {

//     const botao = iconesInteresses[i];
//     const icone = botao.classList[0]
//     const idTextosInteresses = `#texto-${icone}`;

//     botao.onclick = function () {
//         mostraTexto(idTextosInteresses);
//     }
// }
