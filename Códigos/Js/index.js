//Cadastro do usuario
let loginFeito = true
let btnentrar = document.querySelector('#btn_entrar')
let btnCadastrar = document.querySelector('#btnCadastrar')
let btnVagas = document.querySelector('#vagas')
btnVagas.addEventListener('click',()=>{
    loginFeito = false
})

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

// Ajuste do margin do fundo conforme o tamanho da tela
let imgFundo = document.querySelector("#img_fundo")
let tela = document.querySelector("html")
function marginFundo() {
    if(imgFundo) {
        if (tela.offsetWidth < 1156) {
            imgFundo.style.marginTop = "70px"
        }else {
            imgFundo.style.marginTop = '0'
        }
    }
}
window.addEventListener('resize',(e)=>{
    marginFundo()
})
marginFundo()

export {loginFeito}