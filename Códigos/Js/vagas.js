import {vagasDetalhadas,competenciaVagas} from './vagasDetalhadas.js';

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
            let vagaDetalhada = document.querySelector(".vaga_detalhada")
            vagaDetalhada.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
    });
    
    porcemtagem = [...porcemtagem]
    let troca = []
    porcemtagem.map((e,i)=>{
        let porcemtagemInt = parseInt((porcemtagem[i].textContent).match(/\d+/)[0])
        let vagaId = e.parentElement.parentElement.parentElement.getAttribute("data-id")
    })
    troca.push(porcemtagem[0])
    porcemtagem[0]
    console.log(troca)
});
