//Configurações header dinâmico:
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        header.classList.add('header-hidden');
    } else {
        // Rolando para cima
        header.classList.remove('header-hidden');
    }

    lastScrollTop = scrollTop;
}); 

//Ajuste do margin do fundo conforme o tamanho da tela
let imgFundo = document.querySelector("#img_fundo")
 let tela = document.querySelector("html")
 function marginFundo() {
     if (tela.offsetWidth < 1156) {
         imgFundo.style.marginTop = "70px"
     }else {
         imgFundo.style.marginTop = '0'
     }
 }
 window.addEventListener('resize',(e)=>{
     marginFundo()
 })
 window.onload = marginFundo()

 //Pop Up
let btnCadastro = document.querySelectorAll(".cadastrar")
let btnClose = document.querySelector("#btnClose")
let form = document.querySelector("#myModal")
let html = document.querySelector("html")
btnClose.addEventListener('click',(e)=>{
    form.classList.add("hideModal")
})
btnCadastro.forEach((e)=>{
    e.addEventListener('click',modal)
})
function modal(){ 
    form.classList.remove("hideModal")
}

window.addEventListener('load',modalResize)
window.addEventListener('resize',modalResize)

function modalResize(){
    let form = document.querySelector("#myModal")
    form.style.height = html.offsetHeight+"px"
}




