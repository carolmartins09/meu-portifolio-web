// let iconesInteresses = document.querySelectorAll(".icone");

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

//quando clicar em outro botão as outras classes ativadas vão para display 

// jQuery.fn.toggleText = function(a,b) {
//     return   this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
//     }

//     $(document).ready(function(){
//         $('.tgl').before('<span>Revelar conte�do</span>');
//         $('.tgl').css('display', 'none')
//         $('span', '#box-toggle').click(function() {
//             $(this).next().slideToggle('slow')
//             .siblings('.tgl:visible').slideToggle('fast');
        
//             $(this).toggleText('Revelar','Esconder')
//             .siblings('span').next('.tgl:visible').prev()
//             .toggleText('Revelar','Esconder')
//         });
//     })

$(".icone").click(function(){
    $(".textos").toggle();
})