// menu mobile

const menu = document.querySelector('#menu-mobile');
const iconeMenu = document.querySelector('.menu-sanduiche');
const fecharMenu = document.querySelector('.fechar-menu');

function abrirMenuMobile() {
    menu.classList.remove('display-menu-mobile');
}

function fecharMenuMobile() {
    menu.classList.add('display-menu-mobile');
}

iconeMenu.onclick = abrirMenuMobile
fecharMenu.onclick = fecharMenuMobile

// seção interesses

let iconesInteresses = document.querySelectorAll(".icone");
let divInteresses = document.querySelector("#caixa-textos");
let botaoFecharTexto = document.querySelector(".fechar-texto");
let texto = document.querySelector("#texto-interesses");

for (let i = 0; i < iconesInteresses.length; i++) {

    const botao = iconesInteresses[i]
    const idTextosInteresses = botao.id

    botao.onclick = function() {
        mostraTexto(idTextosInteresses)
    }
}

let descricoesInteresses = {
    "texto-gatinhos": "Tenho filhos felinos e atualmente vivem comigo o Zyon, o Iron e a Aurora, além do Snow, meu primeiro gatinho que já virou estrelinha. Eles são minha maior paixão.",
    "texto-estrelas": "Sou apaixonada por assuntos relacionados a ciência, principalmente astrofísica. Meu livro preferido é 'O mundo assombrado pelos demônios', de Carl Sagan.",
    "texto-gamer": "Adoro acompanhar campeonatos de eSport, principalmente de Counter-Strike.",
    "texto-naruto": "Naruto, Attack on Titan e Demon Slayer são meus animes preferidos, e o que mais gosto de assistir nas horas vagas.",
    "texto-planta": "Além de mãe de pet, também sou mãe de planta e vivo na eterna luta de fazer as verdinhas sobreviverem em um apartamento.",
    "texto-yoga":"Pratico yoga a alguns anos e é minha atividade física preferida. É onde encontro paz na correria do dia-a-dia."
}

function mostraTexto(idTextosInteresses) {
    divInteresses.classList.remove("interesses-textos");

    texto.innerHTML = descricoesInteresses[idTextosInteresses] || " ";
}

botaoFecharTexto.onclick = function() {
    divInteresses.classList.add("interesses-textos");
}
