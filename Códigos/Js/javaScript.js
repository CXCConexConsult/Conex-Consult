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
function somenteletras(event) {
    const input = event.target;
    const valor = input.value;
    // Remove caracteres que não são letras ou espaços
    input.value = valor.replace(/[0-9]/g, '');

}
document.getElementById('uf').addEventListener('keypress', function(event) {
    const charCode = event.which || event.keyCode;
    if (charCode >= 47 && charCode <= 58) {
        // Se for um número, impedir a ação
        event.preventDefault();
    }
});
document.getElementById('nome').addEventListener('keypress', function(event) {
    const charCode = event.which || event.keyCode;
    if (charCode >= 47 && charCode <= 58) {
        // Se for um número, impedir a ação
        event.preventDefault();
    }
});
document.getElementById('cidade').addEventListener('keypress', function(event) {
    const charCode = event.which || event.keyCode;
    if (charCode >= 47 && charCode <= 58) {
        // Se for um número, impedir a ação
        event.preventDefault();
    }
});

function converterParaMaiusculas(event) {
    const input = event.target;
    input.value = input.value.toUpperCase();
}

function togglePassword() {
    const passwordInput = document.getElementById('senha');
    const toggleImg = document.querySelector('#img_visaoSenha');

    console.log(toggleImg.src)
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleImg.src = "imagens/visibility_off.png"
    } else {
        passwordInput.type = 'password';
        toggleImg.src = "imagens/visibility_on.png"
    }
}  

function togglePasswordPopUp() {
    const passwordInputPop = document.getElementById('senhaCadastro');
    const toggleIconPop = document.querySelector('.toggle-password-pop');

    if (passwordInputPop.type === 'password') {
        passwordInputPop.type = 'text';
        toggleIconPop.textContent = '👁️‍🗨️'; // Ícone para "esconder"
    } else {
        passwordInputPop.type = 'password';
        toggleIconPop.textContent = '👁️' // Ícone para "mostrar"
    }
}
