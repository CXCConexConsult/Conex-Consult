import {vagasDetalhadas,competenciaVagas} from './vagasDetalhadas.js';

//Usuário com login ou sem login:
let url = new URLSearchParams(window.location.search)
let logado = url.get('login')
ocultarVaga(logado)

//logar com o cadastro da tela de vagas:
let btnCadastrar = document.querySelector("#btnCadastrar")
btnCadastrar.addEventListener('click',()=>{
    let senha = document.querySelector('#senhaCadastro')
    let comfirmacaoSenha = document.querySelector('#confirmarSenha')
    if (senha.value != comfirmacaoSenha.value){
        alert('Senhas não batem')
    } else {
        let modal = document.querySelector('#myModal')
        modal.classList.add('hideModal')
        ocultarVaga("true")
    }
    
})

function ocultarVaga (logado){
    let divOcultarVaga = document.querySelector(".ocultar_vaga")
    let porcemtagem = document.querySelector(".match")
    if (logado == 'true') {
        divOcultarVaga.remove(divOcultarVaga)
        porcemtagem.removeAttribute('style')
    } else {
        document.querySelector(".vaga_detalhada").prepend(divOcultarVaga)
    }
}


let perfil = ["JavaScript","Inglês","Scrum","Git","GitHub","Node.js","HTML5","CSS3","React","Espanhol","SQL","Curso superior em TI"]
function visualizarCompetencias(){
    let vaga1Requisitos = document.querySelectorAll(".requisitos")
    let perfilMatchVaga = []
    let porcemtagem
    perfil.map(e=>{
        vaga1Requisitos.forEach(c=>{
            if (e == c.textContent){
                perfilMatchVaga.push(e)
            }
        })
    })
    vaga1Requisitos.forEach(e=>{
        perfilMatchVaga.map(c=>{
            if(c == e.textContent){
                e.style.backgroundColor = "rgb(0,255,0)"
            }
        })
    })
    porcemtagem = 100*perfilMatchVaga.length / vaga1Requisitos.length
    mudarProcemtagem(Math.trunc(porcemtagem))
}
function mudarProcemtagem (){
    let match = document.querySelectorAll(".porcemtagem")
    let perfilMatchVaga = []
    match.forEach(e=>{
        let vagaId = (e.parentNode.parentElement.parentElement.getAttribute('data-id'))        
        competenciaVagas[vagaId].forEach(e=>{
            perfil.forEach(a=>{
                if(e == a) {
                    perfilMatchVaga.push(e)
                }
            })
        })

        let porcemtagem = 100*perfilMatchVaga.length / competenciaVagas[vagaId].length
        perfilMatchVaga = []

        e.textContent = Math.trunc(porcemtagem) + "%"
        
        //transforma a procemtagem em número
    
        porcemtagem = parseInt(e.textContent.match(/\d+/))
        //altera a cor de acordo com a porcemtagem
        if (porcemtagem > 50) {
            e.style.backgroundColor = "rgb("+(255-(porcemtagem-50)*5)+",255,0)"
        } else {
            e.style.backgroundColor = "rgb(255,"+porcemtagem*5+",0)"
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const vagaItem = document.querySelectorAll('.vaga');
    let porcemtagem = document.querySelectorAll(".porcemtagem");
    const detalhesVaga = document.querySelector('.vaga_detalhada');
    visualizarCompetencias()
    vagaItem.forEach(item => {
        item.addEventListener('click', (e) => {
            let vagaId = item.getAttribute('data-id');
            detalhesVaga.innerHTML = vagasDetalhadas[vagaId]
            visualizarCompetencias(vagaId)
            detalhesVaga.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            if (logado == 'true')
                detalhesVaga.firstChild.remove(detalhesVaga.firstChild)
        });
    });

    //trocar possição das vagas
    let vagas = document.querySelector('#vagas')
    porcemtagem = [...porcemtagem]
    let troca = []
    porcemtagem.map((e,i,l)=>{
        let porcemtagemInt = parseInt((porcemtagem[i].textContent).match(/\d+/)[0])
        for(let c = 1; c < porcemtagem.length; c++){
            let proPorcemtagemInt = parseInt((porcemtagem[c].textContent).match(/\d+/)[0])
        }
        let vagaId = e.parentElement.parentElement.parentElement.getAttribute("data-id")
        if(logado == 'false')
            e.parentElement.style.display = 'none'
    })
});

//função de limpar filtros
let filtros = document.querySelectorAll(".filtro")
let btnLimparFiltros = document.querySelector("#btnLimparFiltros")

btnLimparFiltros.addEventListener('click',()=>{
    [...filtros].forEach(e=>{
        e.value = 'default'
    })
})

//Aumentar tamanho da vaga comforme o scroll
const detalhesVaga = document.querySelector('.vaga_detalhada')
window.addEventListener('scroll',(e)=>{
    if (document.documentElement.scrollTop >= 150) {
        detalhesVaga.style.height = 'calc(100vh - 75px)'
    }else {
        detalhesVaga.style.height = 'calc(100vh - 225px)'
    }
    console.log(document.documentElement.scrollTop)
})

