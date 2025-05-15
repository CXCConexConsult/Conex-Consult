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
    //  form.style.height = html.offsetHeight+"px"
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
 
 //Altera o botão de visualizar senha e muda o tipo do input de senha
 //da área de login
 function togglePassword() {
     const passwordInput = document.getElementById('senha');
     const toggleImg = document.querySelector('#img_visaoSenha');
     if (passwordInput.type === 'password') {
         passwordInput.type = 'text';
         toggleImg.src = "imagens/visibility_off.png"
     } else {
         passwordInput.type = 'password';
         toggleImg.src = "imagens/visibility_on.png"
     }
 }  
 
 //Altera o botão de visualizar senha e muda o tipo do input de senha
 //do pop-up cadastro
 function togglePasswordPopUp() {
     const passwordInputPop = document.getElementById('senhaCadastro');
     const toggleImgPop = document.querySelector('#img_visaoSenhaPop');
     if (passwordInputPop.type === 'password') {
         passwordInputPop.type = 'text';
         toggleImgPop.src = "../../imagens/visibility_off.png"
     } else {
         passwordInputPop.type = 'password';
         toggleImgPop.src = "../../imagens/visibility_on.png"
     }
 }
 //Altera o botão de visualizar senha e muda o tipo do input de confirmação de senha
 //do pop-up cadastro
 function toggleConfirmarPasswordPopUp () {
     const passwordInputPop = document.getElementById('confirmarSenha');
     const toggleImgPop = document.querySelector('#img_visaoConfirmarSenhaPop');
     if (passwordInputPop.type === 'password') {
         passwordInputPop.type = 'text';
         toggleImgPop.src = "../../imagens/visibility_off.png"
     } else {
         passwordInputPop.type = 'password';
         toggleImgPop.src = "../../imagens/visibility_on.png"
     }
 }
 
 let inputConfirmarSenha = document.querySelector("#confirmarSenha")
 let inputSenha = document.querySelector("#senhaCadastro")
 inputSenha = document.addEventListener("input",correspondeciaSenhas)
 inputConfirmarSenha.addEventListener("input",correspondeciaSenhas)
 
 function correspondeciaSenhas(){
     let senha = document.querySelector("#senhaCadastro")
     let confirmarSenha = document.querySelector("#confirmarSenha")
     let confirmacao = document.querySelector("#confirmacao")
     if (senha.value == confirmarSenha.value && senha.value != "") {
         confirmacao.textContent = "Senhas correspondem"
         confirmacao.style.color = "rgb(0, 100, 0)"
     } else if (senha.value != confirmarSenha.value){
         confirmacao.textContent = "As senhas não correspondem"
         confirmacao.style.color = "rgb(100, 0, 0)"
     }
 }
