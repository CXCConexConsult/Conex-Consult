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
     console.log(tela.offsetWidth)
     if (tela.offsetWidth < 1156) {
         imgFundo.style.marginTop = "70px"
         console.log(imgFundo.style.marginTop)
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
btnCadastro.forEach((e)=>{
    e.addEventListener('click',modal)
})
function modal(){ 
    let form = document.querySelector("#myModal")
    console.log(form.classList)
    form.classList.remove("hideModal")
}



