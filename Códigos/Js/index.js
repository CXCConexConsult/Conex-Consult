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
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
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
            if(senha.value != "" && senha.value == comfirmacaoSenha.value){
                baterSenha = true
            }
        }
        //required dos inputs email e senha do index
        function criarAlerta(text, id) {
            let p = document.createElement('p')
            p.setAttribute("class","p_alerta")
            p.setAttribute("id","p_alerta_"+id)
            p.textContent = text
            e.setAttribute("disabled","disabled")
            return p
        }
        if (e.id == "btn_entrar" && email.value == ""){
            let labelEmail = document.querySelector('#labelEmail')
            labelEmail.appendChild(criarAlerta("Digite seu e-mail","email"))
        }
        if(e.id == "btn_entrar" && senha.value == ""){
            let inputSenha = document.querySelector('#password-container')
            inputSenha.insertAdjacentElement('afterend',criarAlerta("Digite sua senha","senha"))

        }
    
        //manda para a URL um true ou false para o paramentro 'login'
        //com esse metodo não é necessário o href nos botões, pois ele tem o seu href
        if((baterSenha || e.id != "btnCadastrar") && email.value != "" && senha.value != "") {
            window.location.href = '/Códigos/paginas/vagas.html?login=' + loginFeito
        }
    })
    
})
let inputs = [senha, email]
inputs.forEach(e=>{
    e.addEventListener('input',(e)=>{
        let pEmail = document.querySelector('#p_alerta_email')
        let pSenha = document.querySelector('#p_alerta_senha')
        let btn = document.querySelector('#btn_entrar')
        if(senha.value != "" && email.value != "") {
            btn.removeAttribute("disabled")
        }
        if(e.target.id == "email" && pEmail != null){
            pEmail.remove(pEmail)
        }
        if(e.target.id == "senha" && pSenha != null){
            pSenha.remove(pSenha)
        }
    })
})

