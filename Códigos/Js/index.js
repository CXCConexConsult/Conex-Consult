//Cadastro do usuario

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


let btn = [...document.querySelectorAll(".btn")] //botões de ir para página de vagas
btn.forEach(e=>{
    let baterSenha = false
    e.addEventListener('click',()=>{
        let loginFeito = false
        if(e.id == "vagas") {
            loginFeito = false
        } else {
            loginFeito = true
        }
        if(e.id == "btnCadastrar") {
            let senha = document.querySelector('#senhaCadastro')
            let comfirmacaoSenha = document.querySelector('#confirmarSenha')
            if(senha.value == ""){
                
            } else {
                if (senha.value != comfirmacaoSenha.value){
                
                } else {
                    baterSenha = true
                }
            }
            
        }
        //manda para a URL um true ou false para o paramentro 'login'
        //com esse metodo não é necessário o href nos botões, pois ele tem o seu href
        if(baterSenha || e.id != "btnCadastrar") {
            window.location.href = '/Códigos/paginas/vagas.html?login=' + loginFeito
        }
    })
})
